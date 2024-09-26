import {CourseDetails } from '../Interfaces/CourseInterface'

function CourseList({ courselist }: { courselist: CourseDetails[] }) {

    //want to order the list by the name
    const ordered = courselist.sort((a, b) => {
        const nameA = a.course.toUpperCase();
        const nameB = b.course.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }
        else if (nameA > nameB) {
            return 1;
        }
        else {
            return 0;
        }
    });
    
  return (
      <select>
          <option>(Choose One)</option>
          {ordered.map((course: CourseDetails) =>
              <option value={course.courseId}>{course.course + ' ' + course.state}</option>
          )}
      </select>
  );
}

export default CourseList;