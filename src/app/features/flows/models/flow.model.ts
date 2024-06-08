export class FlowModel {
    private _id: number;
    private _createdAt: Date;
    private _name: string;
    private _description: string;
    private _groupName: string;

    constructor(id: number, createdAt: Date, name: string, description: string, groupName: string) {
        this._id = id;
        this._createdAt = createdAt;
        this._name = name;
        this._description = description;
        this._groupName = groupName;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get createdAt(): string {
        return this._createdAt.toUTCString();
    }

    public set name(value: Date) {
        this._createdAt = value;
    }

    public get name(): string {
        return this._name;
    }

    public set description(value: string) {
        this._description = value;
    }

    public get description(): string {
        return this._description;
    }

    public get groupName(): string {
        return this._groupName;
    }

    public set groupName(value: string) {
        this._groupName = value;
    }

}