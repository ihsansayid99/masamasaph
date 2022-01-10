import axios from "axios";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import PortfolioDetailsContainer from "../containers/portfolio-details";
import Footer from "../layouts/footer";
import Header from "../layouts/header/index";
import Layout from "../layouts/index";

const PortfolioDetails = ({match}) => {
    const {
        params: {slug}
    } = match
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
            setError(false)
            try {
                const result = await axios.get("https://reskybe.herokuapp.com/api/portofolio")
                setData(result.data.data.filter((project) => project.slug === slug))
            } catch (error) {
                setError(true)
            }
            setLoading(false)
        }
        fetchData()
    }, [slug])
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Alexis || Portfolio Details" />
                <div className="wrapper home-default-wrapper">
                    <Header classOption="hb-border" />
                    <div className="main-content">
                        {
                            loading && (
                                <div className="row">
                                    <div className="col-lg-12 text-center mt-60">
                                        <button className="btn-portfolio">loading</button>
                                    </div>
                                </div> 
                            )
                        }
                        {
                            error && (
                                <h1>Error occured, while fetching API</h1>
                            )
                        }
                        {
                            data && <PortfolioDetailsContainer data={data[0]} /> 
                        }
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    ); 
        
};

PortfolioDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            slug: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
    }),
};

export default PortfolioDetails;
