import type { AttributeRow, NoteType } from "@triliumnext/commons";

export interface NoteParams {
    /** optionally can force specific noteId */
    noteId?: string;
    branchId?: string;
    parentNoteId: string;
    templateNoteId?: string;
    title: string;
    content: string | Buffer;
    /** text, code, file, image, search, book, relationMap, canvas, webView */
    type: NoteType;
    /** default value is derived from default mimes for type */
    mime?: string;
    /** default is false */
    isProtected?: boolean;
    /** default is false */
    isExpanded?: boolean;

    // Indique si le contenu est du markdown. Si true, le contenu est traité comme du markdown et rendu en conséquence. Si false, le contenu est traité comme du texte brut ou du HTML selon le type de note. Par exemple, pour une note de type "text", le contenu sera traité comme du texte brut, tandis que pour une note de type "code", le contenu sera traité comme du code source.
    isMarkdown?: boolean;
    
    /** default is empty string */
    prefix?: string;
    /** default is the last existing notePosition in a parent + 10 */
    notePosition?: number;
    dateCreated?: string;
    utcDateCreated?: string;
    ignoreForbiddenParents?: boolean;
    target?: "into";
    /** Attributes to be set on the note. These are set atomically on note creation, so entity changes are not sent for attributes defined here. */
    attributes?: Omit<AttributeRow, "noteId" | "attributeId">[];
}
