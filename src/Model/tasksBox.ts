export class tasksBox{
    id!: number;
    title!: string;
    date!: Date;
    status!: string;
    owner!: string;
    user!: string;
    showMore!: boolean;
    text!: string;

    constructor(id: number, title: string, date: Date, status: string, owner: string, user: string, showMore: boolean, text: string)
    {
        this.id = id;
        this.title = title;
        this.date = date;
        this.status = status;
        this.owner = owner;
        this.user = user;
        this.showMore = showMore;
        this.text = text;
    }
}