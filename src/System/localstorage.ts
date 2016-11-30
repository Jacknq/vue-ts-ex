
module ft {
    "use strict";

    export class LocalStorageService {
        // TODO: Need to handle QUOTA_EXCEEDED_ERR

      //  public static $inject = [
      //      "$log"
      //  ];

      //  constructor(private $log: ng.ILogService) {
      //  }

        read(path: string): any {
            // if not in local storage, the string "undefined" is returned (why???)
            var text: string = localStorage.getItem(path);
            if (text === null || typeof text === "undefined" || text === "undefined") {
                //this.$log.debug("LocalStorageService::read(" + path + ") - path not found, returned null");
                return null;
            }
            else {
               // this.$log.debug("LocalStorageService::read(" + path + ")");
                return text;
            }
        }

        readObject<T>(path): T {
            var text: any = this.read(path);
            var data: T;
            try {
                data = <T>JSON.parse(text);
            } catch (error) {
               // this.$log.error("LocalStorageService::readObject: can't convert string from local storage to object using JSON.parse(). Error: " + error);
                data = null;
            }

            return data;
        }

        write(path: string, text: string): void {
           // this.$log.debug("LocalStorageService::write(" + path + ")");
            localStorage.setItem(path, text);
        }

        writeObject(path: string, data: any): void {
            var text: string = JSON.stringify(data);
            this.write(path, text);
        }

        remove(path: string): void {
         //   this.$log.debug("LocalStorageService::remove(" + path + ")");
            localStorage.removeItem(path);
        }

        clear(): void {
          //  this.$log.debug("LocalStorageService::clear - all items removed from local storage");
            localStorage.clear();
        }
    }
}