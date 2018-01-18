declare class Form {
    private _schema;
    private _messages;
    private _originalData;
    private _validator;
    constructor(data: any);
    validation({schema, messages}: {
        schema: any;
        messages: any;
    }): this;
    isValid(): any;
    reset(): void;
    data(): {};
    setOriginaldata(): void;
    isDirty(): boolean;
}
export default Form;