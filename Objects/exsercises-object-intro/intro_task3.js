/* 3. Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project's
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not. */

(function () {
    //var project = {
        //description: "This is a project dedicated to solve the issue of creating a  multiple object of the same kind",
        //programmingLanguage: "JavaScrit",
        //gitRepo: "https://github.com/programer/first-project",
        //status: true,
    //},

    function createProject(description, programmingLanguage, gitRepo, status) {
        var obj = {
            description: description,
            programmingLanguage: programmingLanguage,
            gitRepo: gitRepo,
            developmentStatus: status,
            printRepo: function () {
                return obj.gitRepo;
            }
        };
        return obj;

    }
    var project1 = createProject("This is a project dedicated to solve the issue of creating a  multiple object of the same kind", "JavaScrit", "https://github.com/programer/first-project", true);
    var project2 = createProject("New project", "PHP", "https://github.com/programer/my-new-project", false);
    var project3 = createProject();

    console.log("project2: ", project2.printRepo());
    console.log("project1: ", project1.printRepo());
    console.log("project3: ", project3.printRepo());
})();