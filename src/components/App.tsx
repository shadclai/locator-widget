//@ts-nocheck
import React, { useState, useEffect, useContext } from "react";
import qs from 'qs';
import { useTheme } from 'react-jss';
import fetch from 'cross-fetch';
import _ from 'underscore';
import { useStyles } from '@/styles';
import Activity, { ActivityHeader, ActivityBody, ActivityFooter } from '@/components/Activity';
import AddressTextbox from '@/components/AddressTextbox';
import ProductSearchTextbox from '@/components/ProductSearchTextbox';
import AngleLeftIcon from '@/components/AngleLeftIcon';
import AngleRightIcon from '@/components/AngleRightIcon';
import BrandText from '@/components/BrandText';
import Dropdown from '@/components/Dropdown';
import ProductCard from '@/components/ProductCard';
import LocationCard from '@/components/LocationCard';
import { WidgetSettingsContext } from '@/components/WidgetLoader';

export type AppProps = { };

function App({ }: AppProps) {
    const widgetSettings = useContext(WidgetSettingsContext);
    const theme = useTheme();
    const classes = useStyles({ theme });

    const [distanceOptions, setDistanceOptions] = useState([
        { value: 5, label: "5" },
        { value: 10, label: "10" },
        { value: 15, label: "15" },
        { value: 25, label: "25" },
        { value: 50, label: "50" },
    ]);
    const [distance, setDistance] = useState(5);

    const [skipUserAddressValidation, setSkipUserAddressValidation] = useState(false);
    const [userAddress, setUserAddress] = useState("");
    const [userCoordinates, setUserCoordinates] = useState({ longitude: -95.665, latitude: 37.6 });
    const [userAddressCandidates, setUserAddressCandidates] = useState([]);
    const [userAddressCandidatesEnabled, setUserAddressCandidatesEnabled] = useState(false);
    const [geocodingUserAddress, setGeocodingUserAddress] = useState(false);
    const [autoLocatingUserAddress, setAutoLocatingUserAddress] = useState(false);

    const [nearbyProductsActivityActive, setNearbyProductsActivityActive] = useState(true);
    const [nearbyProductsDistanceDropdownOpened, setNearbyProductsDistanceDropdownOpened] = useState(false);
    const [nearbyProductsList, setNearbyProductsList] = useState([]);
    const [nearbyProductsListPagination, setNearbyProductsListPagination] = useState({ limit:5, offset: 0 })
    useEffect(() => {
        const query = {
            ...nearbyProductsListPagination,
            origin: '34.1042182,-118.1069203',
            distance,
            p: widgetSettings.default_pids,
        };
        const url = `${process.env.PACKSON_BASE_API_URI}/core/location-products?${ qs.stringify(query) }`;
        fetch(url)
            .then((res) => res.json())
            .then(({ data }) => {

                setNearbyProductsList(data);

            });
    }, [widgetSettings, distance]);

    const [nearbyProductActivityActive, setNearbyProductActivityActive] = useState(false);

    const [productSelectionActivityActive, setProductSelectionActivityActive] = useState(false);
    const [productSearchTerms, setProductSearchTerms] = useState("");
    const [productSelectionSearchResults, setProductSelectionSearchResults] = useState([
        { id: "AB1", thumbnail: "https://packson-locator-widget.onrender.com/product-image.png", "name": "Wild Cherry Pepsi", shortDesc: "Lorem ipsum fedora sit amet" },
        { id: "AB2", thumbnail: "https://packson-locator-widget.onrender.com/product-image.png", "name": "Wild Cherry Pepsi", shortDesc: "Lorem ipsum fedora sit amet" },
        { id: "AB3", thumbnail: "https://packson-locator-widget.onrender.com/product-image.png", "name": "Wild Cherry Pepsi", shortDesc: "Lorem ipsum fedora sit amet" },
        { id: "AB4", thumbnail: "https://packson-locator-widget.onrender.com/product-image.png", "name": "Wild Cherry Pepsi", shortDesc: "Lorem ipsum fedora sit amet" },
        { id: "AB5", thumbnail: "https://packson-locator-widget.onrender.com/product-image.png", "name": "Wild Cherry Pepsi", shortDesc: "Lorem ipsum fedora sit amet" },
        { id: "AB6", thumbnail: "https://packson-locator-widget.onrender.com/product-image.png", "name": "Wild Cherry Pepsi", shortDesc: "Lorem ipsum fedora sit amet" },
//        { id: "AB7", thumbnail: "https://packson-locator-widget.onrender.com/product-image.png", "name": "Wild Cherry Pepsi", shortDesc: "Lorem ipsum fedora sit amet" },
//        { id: "AB8", thumbnail: "https://packson-locator-widget.onrender.com/product-image.png", "name": "Wild Cherry Pepsi", shortDesc: "Lorem ipsum fedora sit amet" },
//        { id: "AB9", thumbnail: "https://packson-locator-widget.onrender.com/product-image.png", "name": "Wild Cherry Pepsi", shortDesc: "Lorem ipsum fedora sit amet" },
    ]);
    const [productSelectionList, setProductSelectionList] = useState([]);

    const [singleProductActivityActive, setSingleProductActivityActive] = useState(false);
    const [singleProduct, setSingleProduct] = useState(null);

    const [nearbyLocationsActivityActive, setNearbyLocationsActivityActive] = useState(false);
    const [nearbyLocationsDistanceDropdownOpened, setNearbyLocationsDistanceDropdownOpened] = useState(false);
    const [nearbyLocationList, setNearbyLocationList] = useState([
        { id: "AB1", coordinates: [-118.1097206,34.1060926], productsFound: [{ id: "ABC1" }], storeName: "Safeway", street: "2225 W 10th Ave", city: "Spokane", state: "WA", postalCode: "99207" },
        { id: "AB1", coordinates: [-118.1097206,34.1060926], productsFound: [{ id: "ABC1" }, { id: "ABC12" }], storeName: "Safeway", street: "2225 W 10th Ave", city: "Spokane", state: "WA", postalCode: "99207" },
        { id: "AB1", coordinates: [-118.1097206,34.1060926], productsFound: [{ id: "ABC1" }], storeName: "Safeway", street: "2225 W 10th Ave", city: "Spokane", state: "WA", postalCode: "99207" },
        { id: "AB1", coordinates: [-118.1097206,34.1060926], productsFound: [{ id: "ABC1" }, { id: "ABC12" }], storeName: "Safeway", street: "2225 W 10th Ave", city: "Spokane", state: "WA", postalCode: "99207" },
        { id: "AB1", coordinates: [-118.1097206,34.1060926], productsFound: [{ id: "ABC1" }], storeName: "Safeway", street: "2225 W 10th Ave", city: "Spokane", state: "WA", postalCode: "99207" },
        { id: "AB1", coordinates: [-118.1097206,34.1060926], productsFound: [{ id: "ABC1" }, { id: "ABC12" }], storeName: "Safeway", street: "2225 W 10th Ave", city: "Spokane", state: "WA", postalCode: "99207" },
        { id: "AB1", coordinates: [-118.1097206,34.1060926], productsFound: [{ id: "ABC1" }], storeName: "Safeway", street: "2225 W 10th Ave", city: "Spokane", state: "WA", postalCode: "99207" },
        { id: "AB1", coordinates: [-118.1097206,34.1060926], productsFound: [{ id: "ABC1" }, { id: "ABC12" }], storeName: "Safeway", street: "2225 W 10th Ave", city: "Spokane", state: "WA", postalCode: "99207" },
    ]);

    const [singleLocationActivityActive, setSingleLocationActivityActive] = useState(false);
    const [singleLocation, setSingleLocation] = useState(null);

    useEffect(() => {
        if (skipUserAddressValidation) return;
        if (userAddress.replace(/^\s+|\s+$/g, '') === "") return;

        const t = setTimeout(() => {
            setGeocodingUserAddress(true);

            const query = {
                q: userAddress
            };
            const url = `https://geocode.maps.co/search?${ qs.stringify(query) }`;
            fetch(url)
                .then((res) => res.json())
                .then((data) => {

                    const userAddressCandidates = data.map(({ display_name, lon, lat })=> ({
                        displayName: display_name,
                        longitude: lon,
                        latitude: lat,
                    }));
                    setUserAddressCandidates(userAddressCandidates);

                    setUserAddressCandidatesEnabled(true);

                    setGeocodingUserAddress(false);
                });
        }, 700);

        return () => {
            clearTimeout(t);
            // TODO: determine best way to cancel fetches
        }
    }, [userAddress]);

    function autoLocateUserAddress() {

        if ("geolocation" in navigator) {
            setAutoLocatingUserAddress(true);

            navigator.geolocation.getCurrentPosition((position) => {
              const { latitude, longitude } = position.coords;
              // TODO: upgrade to ESRI when ready
              const query = {
                lat: latitude,
                lon: longitude,
              };
              const url = `https://geocode.maps.co/reverse?${ qs.stringify(query) }`;
              fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    const { display_name } = data;

                    setSkipUserAddressValidation(true);

                    setUserAddress(display_name);
                    setUserCoordinates({ longitude, latitude });

                    setAutoLocatingUserAddress(false);
                });
            });
        } else {
            // TODO: IP userAddress auto location
        }

        return () => {
            // TODO: determine best way to cancel fetches
        };
    }

    function chooseAddressCandidate({ displayName, longitude, latitude }) {
        setSkipUserAddressValidation(true);
        setUserAddress(displayName);
        setUserCoordinates({ longitude, latitude });
        setUserAddressCandidates([]);
        setUserAddressCandidatesEnabled(false);
    }

    function onNearbyProductClick({ event, id, thumbnail_url, name, short_desc, locations }) {
        event.preventDefault();

        setSingleProduct({ id, thumbnail_url, name, short_desc, locations });
        setNearbyProductActivityActive(true);
    }

    function onProductClick({ event, id, thumbnail, name, shortDesc }) {
        event.preventDefault();

        setSingleProduct({ id, thumbnail, name, shortDesc });
        setSingleProductActivityActive(true);
    }

    function handleNearbyProductsDistanceClick(dist) {
        setDistance(dist);
        setNearbyProductsDistanceDropdownOpened(false);
    }

    function onPreviousNearbyProductsPageClick(event) {
        event.preventDefault();
    }

    function onNextNearbyProductsPageClick(event) {
        event.preventDefault();
    }

    function productSelectionSearchResultToggle({ id }) {
        const item = _.findWhere(productSelectionList, { id });
        if (item) {
            setProductSelectionList(_.without(productSelectionList, item));
        } else {
            setProductSelectionList([...productSelectionList, { id }]);
        }
    }

    function handleNearbyLocationsDistanceClick(dist) {
        setDistance(dist);
        setNearbyLocationsDistanceDropdownOpened(false);
    }

    function handleUserAddressChange({ value }) {
        setSkipUserAddressValidation(false);
        setUserAddress(value);
    }

    function handleNearbyLocationClick({ id, storeName, street, city, state, postalCode, productsFound }) {
        setSingleLocation({ id, storeName, street, city, state, postalCode, productsFound });
        setSingleLocationActivityActive(true);
    }

    return (
        <>
            <Activity active={nearbyProductsActivityActive}>
                <ActivityHeader>

                    <img src={theme.logo_image} width="118" alt=""/>
                    <div className={classes.activityAction}>
                        <a className={classes.actionLink}
                            onClick={() => setProductSelectionActivityActive(true)}
                        >Select products</a>
                    </div>

                </ActivityHeader>
                <ActivityBody>

                    <AddressTextbox name="userAddress"
                        value={userAddress}
                        onChange={(event) => handleUserAddressChange({ value: event.target.value })}
                        candidates={userAddressCandidates}
                        candidatesEnabled={userAddressCandidatesEnabled}
                        chooseCandidate={chooseAddressCandidate}
                        geocoding={geocodingUserAddress}
                        autoLocate={autoLocateUserAddress}
                        autoLocating={autoLocatingUserAddress}
                    />
                    <div className={classes.resultsHeader}>
                        <div>Products within <Dropdown label={distance}
                                opened={nearbyProductsDistanceDropdownOpened}
                                toggleOpen={setNearbyProductsDistanceDropdownOpened}
                            >
                            {distanceOptions.map(({ value, label }, i) => (
                                <div key={i} className={classes.distanceSelectOption}
                                    onClick={() => handleNearbyProductsDistanceClick(value)}
                                >{label}</div>
                            ))}
                        </Dropdown> miles of <strong>Spokane, WA</strong></div>
                    </div>
                    <div className={classes.grid}>

                        {nearbyProductsList.map(({ id, thumbnail_url, name, short_desc, locations }, i) => (
                            <div key={i} className={classes.gridImageCell}>
                                <a href="#" className={classes.gridImageWrapper}
                                    onClick={() => onNearbyProductClick({ event, id, thumbnail_url, name, short_desc, locations })}
                                >
                                    <figure className={classes.gridImageFigure}>
                                        <img className={classes.gridImage }
                                            src={thumbnail_url}
                                            width="128"
                                            height="128"
                                         />
                                     </figure>
                                 </a>
                            </div>
                        ))}

                    </div>
                    <nav className={classes.pagination}>
                        <div className={classes.paginationLinks}>

                            <a href="#" className={classes.paginationLink}
                                onClick={onPreviousNearbyProductsPageClick}
                            >
                                <AngleLeftIcon/>
                            </a>
                            <a href="#" className={classes.paginationLink}
                                onClick={onNextNearbyProductsPageClick}
                            >
                                <AngleRightIcon/>
                            </a>

                        </div>
                    </nav>

                </ActivityBody>
                <ActivityFooter>

                    <span className={classes.poweredBy}>Powered by <BrandText/></span>

                </ActivityFooter>
            </Activity>
            <Activity active={nearbyLocationsActivityActive}>
                <ActivityHeader>

                    <img src={theme.logo_image} width="118" alt=""/>
                    <div className={classes.activityAction}>
                        <a className={classes.actionLink}
                            onClick={() => setProductSelectionActivityActive(true)}
                        >Select products</a>
                    </div>

                </ActivityHeader>
                <ActivityBody shrunk>

                    <AddressTextbox name="userAddress"
                        value={userAddress}
                        onChange={(event) => handleUserAddressChange({ value: event.target.value })}
                        candidates={userAddressCandidates}
                        candidatesEnabled={userAddressCandidatesEnabled}
                        chooseCandidate={chooseAddressCandidate}
                        geocoding={geocodingUserAddress}
                        autoLocate={autoLocateUserAddress}
                        autoLocating={autoLocatingUserAddress}
                    />
                    <div className={classes.resultsHeader}>
                        <div><strong>25</strong> locations within <Dropdown label={distance}
                                opened={nearbyLocationsDistanceDropdownOpened}
                                toggleOpen={setNearbyLocationsDistanceDropdownOpened}
                            >
                              {distanceOptions.map(({ value, label }, i) => (
                                  <div key={i} className={classes.distanceSelectOption}
                                      onClick={() => handleNearbyLocationsDistanceClick(value)}
                                  >{label}</div>
                              ))}
                          </Dropdown> mi of <strong>Spokane, WA</strong></div>
                    </div>

                </ActivityBody>

                <div className={classes.locationIndexList}>
                    {nearbyLocationList.map(({ id, storeName, street, city, state, postalCode, productsFound }, i) => (
                        <div key={i} className={classes.locationIndex}
                            onClick={() => handleNearbyLocationClick({ id, storeName, street, city, state, postalCode, productsFound })}
                        >
                            <div>
                                <div className={classes.locationIndexStore}>{storeName}</div>
                                <div className={classes.locationIndexAddress}>{street}<br/>{city}, {state} {postalCode}</div>
                            </div>
                            <div>
                                <span className={classes.locationIndexDistance}><span className={classes.locationIndexDistanceNum}>2.2</span> mi</span>
                                <span className={classes.locationIndexProductsFound}>{productsFound.length} products</span>
                            </div>
                        </div>
                    ))}
                </div>

                <ActivityFooter>

                    <span className={classes.poweredBy}>Powered by <BrandText/></span>

                </ActivityFooter>
            </Activity>
            <Activity active={productSelectionActivityActive}
                sub
            >
                <ActivityHeader>

                    <img src={theme.logo_image} width="118" alt=""/>
                    <div className={classes.activityAction}>
                        <a className={classes.actionLink}
                            onClick={() => {
                                setNearbyProductsActivityActive(false);
                                setProductSelectionActivityActive(false);
                                setNearbyLocationsActivityActive(true);
                            }}
                        >Done</a>
                    </div>

                </ActivityHeader>
                <ActivityBody>

                    <ProductSearchTextbox name="keywords"
                        value={productSearchTerms}
                        onChange={(event) => setProductSearchTerms(event.target.value)}
                    />
                    <div className={classes.resultsHeader}>
                        <div>Showing <strong>{productSelectionSearchResults.length}</strong> of <strong>10</strong></div>
                    </div>
                    <div className={classes.grid}>

                        {productSelectionSearchResults.map(({ id, thumbnail }, i) => (
                            <div key={i} className={classes.gridImageCell}>
                                <div className={_.findIndex(productSelectionList,i=>i.id==id)>=0? classes.gridImageCheckedInputWrapper : classes.gridImageInputWrapper}
                                    onClick={() => productSelectionSearchResultToggle({ id })}
                                >
                                    <figure className={classes.gridImageFigure}>
                                        <img className={classes.gridImage }
                                            src={thumbnail}
                                            width="128"
                                            height="128"
                                         />
                                     </figure>
                                     <input type="checkbox" className={classes.gridImageCheckbox}
                                        checked={_.findIndex(productSelectionList,i=>i.id==id)>=0? "checked" : ""}
                                        onClick={(event) => event.stopPropagation()}
                                        onChange={() => productSelectionSearchResultToggle({ id })}/>
                                 </div>
                            </div>
                        ))}

                    </div>
                    <nav className={classes.pagination}>
                        <div className={classes.paginationLinks}>

                            <a href="#" className={classes.paginationLink}
                                onClick={onPreviousNearbyProductsPageClick}
                            >
                                <AngleLeftIcon/>
                            </a>
                            <a href="#" className={classes.paginationLink}
                                onClick={onNextNearbyProductsPageClick}
                            >
                                <AngleRightIcon/>
                            </a>

                        </div>
                    </nav>

                </ActivityBody>
                <ActivityFooter>

                    <span className={classes.poweredBy}>Powered by <BrandText/></span>

                </ActivityFooter>
            </Activity>
            <Activity active={nearbyProductActivityActive}
                sub
            >
                <ActivityHeader>

                    <img src={theme.logo_image} width="118" alt=""/>
                    <div className={classes.activityAction}>
                        <a className={classes.actionLink}
                            onClick={() => setNearbyProductActivityActive(false)}
                        >Back</a>
                    </div>

                </ActivityHeader>

                <ActivityBody shrunk>

                    <ProductCard {...singleProduct}/>

                </ActivityBody>

                <div className={classes.locationIndexList}>
                    {singleProduct && singleProduct.locations.map(({ id, name, address_1, address_2, locality, province, postcode }, i) => (
                        <div key={i} className={classes.locationIndex}
                            onClick={() => handleNearbyLocationClick({ id, storeName, street, city, state, postalCode, productsFound })}
                        >
                            <div>
                                <div className={classes.locationIndexStore}>{name}</div>
                                <div className={classes.locationIndexAddress}>{address_1}<br/>{locality}, {province} {postcode}</div>
                            </div>
                            <div>
                                <span className={classes.locationIndexDistance}><span className={classes.locationIndexDistanceNum}>2.2</span> mi</span>
                            </div>
                        </div>
                    ))}
                </div>

                <ActivityFooter>

                    <span className={classes.poweredBy}>Powered by <BrandText/></span>

                </ActivityFooter>
            </Activity>
            <Activity active={singleLocationActivityActive}
                sub
            >
                <ActivityHeader>

                    <img src={theme.logo_image} width="118" alt=""/>
                    <div className={classes.activityAction}>
                        <a className={classes.actionLink}
                            onClick={() => setSingleLocationActivityActive(false)}
                        >Back</a>
                    </div>

                </ActivityHeader>

                <LocationCard {...singleLocation} productsFound={false} />

                <ActivityBody>
                    <div className={classes.resultsHeader}>
                        <div>Products within miles of <strong>Spokane, WA</strong></div>
                    </div>
                    <div className={classes.grid}>

                        {nearbyProductsList.map(({ id, thumbnail, name, shortDesc }, i) => (
                            <div key={i} className={classes.gridImageCell}>
                                <a href="#" className={classes.gridImageWrapper}
                                    onClick={() => onProductClick({ event, id, thumbnail, name, shortDesc })}
                                >
                                    <figure className={classes.gridImageFigure}>
                                        <img className={classes.gridImage }
                                            src={thumbnail}
                                            width="128"
                                            height="128"
                                            alt={name}
                                            title={shortDesc}
                                         />
                                     </figure>
                                 </a>
                            </div>
                        ))}

                    </div>

                </ActivityBody>
                <ActivityFooter>

                    <span className={classes.poweredBy}>Powered by <BrandText/></span>

                </ActivityFooter>
            </Activity>
            <Activity active={singleProductActivityActive}
                sub
            >
                <ActivityHeader>

                    <img src={theme.logo_image} width="118" alt=""/>
                    <div className={classes.activityAction}>
                        <a className={classes.actionLink}
                            onClick={() => setSingleProductActivityActive(false)}
                        >Back</a>
                    </div>

                </ActivityHeader>

                <ActivityBody>

                    <ProductCard {...singleProduct}/>

                </ActivityBody>

                <LocationCard {...singleLocation} productsFound={false}/>

                <ActivityFooter>

                    <span className={classes.poweredBy}>Powered by <BrandText/></span>

                </ActivityFooter>
            </Activity>
        </>
    );
}

export default App;