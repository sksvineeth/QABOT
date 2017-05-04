// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/81862d240d257e28eda42029c4a1bc8bea984360/html-entities/index.d.ts
declare module 'html-entities' {
// Type definitions for html-entities v1.2.0
// Project: https://www.npmjs.com/package/html-entities
// Definitions by: Xavier Stouder <https://github.com/xstoudi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

abstract class Entities {
    encode(toEncode: string): string;
    encodeNonUTF(toEncode: string): string;
    encodeNonASCII(toEncode: string): string;
    decode(toDecode: string): string;
}
export class XmlEntities extends Entities { }
export class Html4Entities extends Entities { }
export class Html5Entities extends Entities { }
export class AllHtmlEntities extends Entities { }
}
