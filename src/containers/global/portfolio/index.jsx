import axios from "axios";
import { useEffect, useState } from "react";
import PortfolioItem from "../../../components/portfolio/portfolio-item";

const PortfolioContainer = () => {
    // Isotope Categories list JS

    const [isError, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {
        setIsLoading(true);
        axios.get("https://reskybe.herokuapp.com/api/portofolio")
        .then((response)=> {
            setData(response.data.data)
            setIsLoading(false)
        })
        .catch((err) => {
            setError(true)
            setIsLoading(false)
        })
    }, [])
    const dataCategory = ["prewedding", "wedding", "potrait"];
    return (
        <div className="portfolio-area portfolio-default-area">
            <div className="container-fluid">
                
                {
                    isLoading ?
                        <div className="row">
                            <div className="col-lg-12 text-center mt-60">
                                <button className="btn-portfolio">loading</button>
                            </div>
                        </div> 
                    : 
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 portfolio-list mb-n30">
                            <div className="col resizer"></div>
                            {data &&
                                data.map((portfolio) => (
                                    <div
                                        key={portfolio.id}
                                        className={`col masonry-grid mb-30 ${portfolio.category}`}
                                    >
                                        <PortfolioItem portfolio={portfolio} />
                                    </div>
                                ))}
                        </div>
                }
            </div>
        </div>
    );
};

export default PortfolioContainer;
