abstract class TakePhoto {
    constructor(public cameraMode: string, public filter: string) {}

    abstract getSepia(): void

    getReelTime(): number {
        // some complex proces 
        return 55
    }
}

class NewPhoto extends TakePhoto {
    photoId: string = "1122"

    getSepia(): void {
        console.log("sepia")
    }
}

class Instagram extends TakePhoto {
    constructor(public cameraMode: string, public filter: string, public burst: number) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("another sepia")
    }
}

// let photoNote = new Instagram("color", "vintage") //abstract class doesn't allow to create object of a class
let instaIns = new Instagram("color", "vintage", 44)

instaIns.getReelTime()