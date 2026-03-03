import { ModelDocumentFragment, ModelElement, Plugin, ModelPosition, ViewDocumentTabEvent, isWidget } from "ckeditor5";

export default class CustomShortcutPlugin extends Plugin {
    init() {
        // Ctrl+Shift+C for inline code formatting
        this.editor.keystrokes.set( "Ctrl+Shift+C", ( _, cancel ) => {
            const command = this.editor.commands.get( 'code' );
            if (command && command.isEnabled) {
                command.execute();
                cancel();
            }
        } );
    }
}