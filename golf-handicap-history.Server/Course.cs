using golf_handicap_history.Server.Models;
using System.Text.Json;

internal class Course
{
    public List<Course_DTO> GetAllCourses()
    {
        List<Course_DTO> courses = new List<Course_DTO>();

        courses.Add(new Course_DTO(){
            course = "Hannastown",
            courseId = 1,
            state = "PA"
        });
        courses.Add(new Course_DTO()
        {
            course = "Westwood",
            courseId = 2,
            state = "PA"
        });
        courses.Add(new Course_DTO()
        {
            course = "Yough CC",
            courseId = 3,
            state = "PA"
        });
        courses.Add(new Course_DTO()
        {
            course = "South Park GC",
            courseId = 4,
            state = "PA"
        });
        courses.Add(new Course_DTO()
        {
            course = "Grand View GC",
            courseId = 5,
            state = "PA"
        });
        courses.Add(new Course_DTO()
        {
            course = "Willowbrook",
            courseId = 6,
            state = "PA"
        });
        courses.Add(new Course_DTO()
        {
            course = "Nemacolin CC",
            courseId = 7,
            state = "PA"
        });
        courses.Add(new Course_DTO()
        {
            course = "Totteridge",
            courseId = 8,
            state = "PA"
        });
        courses.Add(new Course_DTO()
        {
            course = "The Mines",
            courseId = 9,
            state = "MI"
        });
        courses.Add(new Course_DTO()
        {
            course = "Pilgrims Run",
            courseId = 10,
            state = "MI"
        });
        courses.Add(new Course_DTO()
        {
            course = "Diamond Springs",
            courseId = 11,
            state = "MI"
        });
        courses.Add(new Course_DTO()
        {
            course = "Sweetens Cove",
            courseId = 12,
            state = "TN"
        });

        return courses;
    }
}