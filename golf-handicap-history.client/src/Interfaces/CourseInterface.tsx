export interface Hole {
    num: number,
    length: number,
    par: number,
    hcp: number
}

export interface Tee {
    tee: string,
    teeId: number,
    color: string,
    text: string,
    rating: number,
    slope: number,
    front9length: number,
    backl9ength: number,
    totallength: number,
    front9par: number,
    back9par: number,
    totalpar: number,
    holes: Hole[]
}

export interface Course {
    course: string, 
    courseId: number,
    tees: Tee[]
}

export interface CourseDetails {
    course: string,
    courseId: number,
    state: string
}

export default Course;