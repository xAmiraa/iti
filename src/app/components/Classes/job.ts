export class Job {
  filter: any;
    constructor(
        public title:String,
        public salary:string,
        public location:string,
        public type:string,
        public qual:[],
        public languages:string,
        public exper:string,
        public desc:string,
        public respons:[],
        public company:string,
        public time:string
        

    ){}
}
