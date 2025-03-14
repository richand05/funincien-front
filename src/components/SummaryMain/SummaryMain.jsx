import "./SummaryMain.css";
import { FaCommentDots, FaUserPlus, FaPenFancy, FaEye, FaHeart } from "react-icons/fa";


const SummaryMain = () => {
    const stats = [
        { icon: <FaPenFancy />, label: "Publicaciones", target: 80 },
        { icon: <FaUserPlus />, label: "Suscriptores", target: 70 },
        { icon: <FaHeart />, label: "Likes", target: 10 },
        { icon: <FaCommentDots />, label: "Comentarios", target: 20 },
        { icon: <FaEye />, label: "Visualizaciones", target: 150 }
    ];

    return (
        <div className="counter-container">
            <div className="container">
                <div className="row justify-content-center gap-3">
                    {stats.map((stat, index) => (
                        <div key={index} className="col-lg-2 col-md-4 col-6 counter-box mx-2">
                            <span className="icon">{stat.icon}</span>
                            <span className="icon">+{stat.target}</span>
                            <span className="label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SummaryMain;