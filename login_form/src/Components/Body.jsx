import { cards } from "../Data/Cards";
import "../Styles/Body.css";

const Body = () => {
    return (
        <>   
             <main className="body">
                {cards.map((data) => (
                    <div className="card" key={data.id}>
                        <span className="card-name">{data.name}</span>
                        <span className="card-description">{data.description}</span>
                        <span className="card-price">{`Rating: ${data.rating}`}</span>
                    </div>
                ))}
            </main>      
        </>
        
        

    );
};

export default Body;
