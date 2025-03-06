import { useState, useEffect } from "react";
import "./SummaryMain.css";
import { FaRegThumbsUp, FaCommentDots, FaUserPlus, FaPenFancy, FaEye } from "react-icons/fa";


const SummaryMain = () => {
    const stats = [
        { icon: <FaPenFancy />, label: "Post", target: 80 },
        { icon: <FaUserPlus />, label: "Suscriptores", target: 70 },
        { icon: <FaRegThumbsUp />, label: "Likes", target: 10 },
        { icon: <FaCommentDots />, label: "Comentarios", target: 20 },
        { icon: <FaEye />, label: "Visualizaciones", target: 150 }
    ];

    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        const intervals = stats.map((stat, index) => {
            let increment = Math.ceil(stat.target / 30);
            if (increment < 1) increment = 1;

            return setInterval(() => {
                setCounts((prevCounts) => {
                    const newCounts = [...prevCounts];
                    if (newCounts[index] < stat.target) {
                        newCounts[index] = Math.min(newCounts[index] + increment, stat.target);
                    }
                    return newCounts;
                });
            }, 50);
        });

        return () => intervals.forEach(clearInterval);
    }, [stats]);

    return (
        <div className="counter-container">
            <div className="container">
                <div className="row justify-content-center gap-3">
                    {stats.map((stat, index) => (
                        <div key={index} className="col-lg-2 col-md-4 col-6 counter-box mx-2">
                            <span className="icon">{stat.icon}</span>
                            <span className="number">+{counts[index]}</span>
                            <span className="label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SummaryMain;