import State from "./State.jsx";
const Room = () => {

    const todos = [
        {
            id: 1,
            title: "Setup development environment",
            completed: true
        },
        {
            id: 2,
            title: "Develop a website",
            completed: false
        },
        {
            id: 3,
            title: "Deploy to live server",
            completed: false
        },
        {
            id: 4,
            title: "Deploy to live server",
            completed: false
        }
    ];
    return (
        <div>
           
              <State items={todos}  /> 
        </div>
    );
};

export default Room;