import { useEffect, useState } from 'react';
import './App.css';
import CourseInfo from './ScoreDetails/CourseInfo'
import CourseList from './CourseDetails/CourseList'
import { CourseDetails } from './Interfaces/CourseInterface';

//test files for JSON - REMOVE WHEN USING API
import teeInfo from './assets/HannastownInfo.json'

//import courses from './assets/Courses.json'
/*import CourseInterface from './Interfaces/CourseInterface'*/


function App() {
    const [courseinfo, setCourseinfo] = useState<CourseDetails[]>();

    useEffect(() => {
        populateGolfCourses();
    }, []);

    //here is where we would get the courses from an axios call
    //and possibly pre fetch some course details?

    //const [courseId, setCourseId] = useState();
    //const [score, setScore] = useState<Score[]>();

    if (courseinfo != undefined) {
        return (
            <div>
                <h1 id="tableLabel">Course List Test</h1>
                <p>This component demonstrates fetching data from the server.</p>

                <h1 id="golf-handicap">Golf</h1>
                <CourseList courselist={courseinfo!} />  {/*have this drive the CourseInfo*/}
                <CourseInfo details={teeInfo} />
            </div>
        );
    }

    async function populateGolfCourses() {
        const response = await fetch('courselist');
        const data = await response.json();
        setCourseinfo(data);
    }
}

export default App;