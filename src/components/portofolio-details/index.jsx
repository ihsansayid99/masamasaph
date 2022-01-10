import PropTypes from "prop-types";
import { LightgalleryItem, LightgalleryProvider } from "react-lightgallery";

const PortfolioItemDetail = ({ portfolio }) => {
    return (
        <div className="single-portfolio">
            <LightgalleryProvider>
                <LightgalleryItem
                    group="any"
                    src={portfolio.image}
                >
                    <div className="thumbnail">
                        <div className="overlay">
                            <img
                                src={
                                    portfolio.image
                                }
                                alt="portfolio"
                            />
                        </div>
                    </div>
                </LightgalleryItem>
            </LightgalleryProvider>
        </div>
    );
};

PortfolioItemDetail.propTypes = {
    portfolio: PropTypes.object,
};

export default PortfolioItemDetail;
