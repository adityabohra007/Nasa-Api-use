class Nasa{
    constructor(data){
        this.copyright = data.copyright;

        if(!this.copyright){
            this.copyright="Not Available";
        }
        this.explanation = data.explanation;

        if(!this.explanation.length){
            this.explanation = "No Explanation";
        }
        this.title = data.title;

        if(!this.title.length){
            this.title = "No Title";
        }
        this.url = data.url;

    }
}
export default Nasa;
