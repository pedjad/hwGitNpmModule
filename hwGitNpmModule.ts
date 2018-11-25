export class hwGitNpmModule{
    censorWords = ["sad", "mad", "bad"];
    censor (inStr: string): string {
        for (let idx in this.censorWords){
            inStr = inStr.replace(this.censorWords[idx],"****");
        }
        return inStr;
    }
}
