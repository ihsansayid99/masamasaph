import PropTypes from "prop-types";
import { LightgalleryItem, LightgalleryProvider } from "react-lightgallery";
import { Link } from "react-router-dom";

const PortfolioItem = ({ portfolio }) => {
    return (
        <div className="single-portfolio">
            <LightgalleryProvider>
                <LightgalleryItem
                    group="any"
                    src={portfolio.thumbnail}
                >
                    <div className="thumbnail">
                        <div className="overlay">
                            <img
                                src={
                                    portfolio.thumbnail
                                }
                                alt="portfolio"
                            />
                        </div>
                    </div>
                </LightgalleryItem>
            </LightgalleryProvider>
            <div className="content">
                <h3 className="title">
                    <Link
                        to={
                            process.env.PUBLIC_URL +
                            `/portfolio-details/${portfolio.slug}`
                        }
                    >
                        {portfolio.titleName}
                    </Link>
                </h3>
                <p className="desc">{portfolio.desc}</p>
            </div>
        </div>
    );
};

PortfolioItem.propTypes = {
    portfolio: PropTypes.object,
};

export default PortfolioItem;
