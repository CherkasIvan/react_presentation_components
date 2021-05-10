import {BUTTON_SIZE} from "../../constants/buttonSizes";
import Button from "../../components/Buttons";
import Text from "../../components/Text";
import Link from "../../components/Link";
import RoundButtons from "../../components/RoundButtons";
import {ArrowLeft} from "../../assets";

function PresentationPage() {

    return (
        <div>
            <h1>
                Presentation Page
            </h1>
            <div className="buttonBox">
                <Button
                    classCSS={'primary'}
                    color={'blue'}
                    text={'Primary'}>
                </Button>
                <Button classCSS={'primary'}
                        color={"blue"}
                        iconLeft={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>}
                        text={'Previous step'}>
                </Button>
                <Button classCSS={'primary'}
                        color={"blue"}
                        iconRight={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>}
                        text={'Continue'}>
                </Button>
                <Button classCSS={'primary'}
                        color={"blue"}
                        iconRight={<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>}
                        text={'Create New'}>
                </Button>
                <Button classCSS={'primary'}
                        size={BUTTON_SIZE.small}
                        color={"blue"}
                        text={'Primary'}>
                </Button>

                <Button classCSS={'secondary'}
                        color={"Gainsboro"}
                        text={'Secondary'}>
                </Button>
                <Button classCSS={'secondaryLight'}
                        color={"inherit"}
                        text={'Secondary light'}>
                </Button>
                <Button classCSS={'secondaryDark'}
                        color={"#00000F"}
                        text={'Secondary'}>
                </Button>
                <Button classCSS={'disabled'}
                        text={'Disabled'}>
                </Button>

                <Button spinner={BUTTON_SIZE.spinner}>
                </Button>

                <Button classCSS={'active'}
                        color={"LightSlateGray"}
                        text={'Active'}>
                </Button>
                <Button classCSS={'activeVariant'}
                        color={"#D5E7EB"}
                        text={'Active variant'}>
                </Button>
                <Button classCSS={'destructive'}
                        color={"#CE2743"}
                        text={'Destructive'}>
                </Button>
                <Button>
                </Button>
                <Button
                        classCSS={'ownTheZone'}
                        color={"#0D192E"}
                        iconLeft={<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="orange"><g><rect fill="none" height="24" width="24" x="0"/><path d="M12,8.89L12.94,12h2.82l-2.27,1.62l0.93,3.01L12,14.79l-2.42,1.84l0.93-3.01L8.24,12h2.82L12,8.89 M12,2l-2.42,8H2 l6.17,4.41L5.83,22L12,17.31L18.18,22l-2.35-7.59L22,10h-7.58L12,2L12,2z"/></g></svg>}
                        iconLeftColored={<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="orange"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>}
                        text={'Own the zone'}>
                </Button>
                <select>
                    <option value="artwork">Upload Artwork</option>
                    <option value="map">New Map</option>
                    <option value="schedule">New Schedule</option>
                </select>
            </div>
            <hr/>
            <hr/>

            {/*Text*/}
            <Text tag={'h1'}
                  text={'Heading 1'}>
            </Text>
            <hr/>
            <Text tag={'h2'}
                  text={'Heading 2'}>
            </Text>
            <hr/>
            <Text tag={'h3'}
                  text={'Heading 3'}>
            </Text>
            <hr/>
            <Text tag={'h4'}
                  text={'Heading 4'}>
            </Text>
            <hr/>
            <Text classCSS={'bigP'}
                  tag={'p'}
                  text={"We are ssionate about designing to enrich and enhance your " +
                   "lifestyle and this translates into your home interior design. Our firm is made up" +
                   " of an amazing mix of architects, interior designers, interior decorators and manufacturers. " +
                   "We are professional, committed and passionate about our work."}>
            </Text>
            <hr/>
            <Text classCSS={'smallP'}
                  tag={'p'}
                  text={"We are a team of professional photographers and videographers who would" +
                   " love to share our passion and knowledge with you!"}>
            </Text>

            <hr/>
            <hr/>

            {/*Links*/}
            <div className='linksBox'>
                <Link classCSS={'linkPrimary'} text={'Link Primary'}/>
                <Link classCSS={'linkSecondary'} text={'Link Secondary'}/>
                <Link classCSS={'linkDisabled'} text={'Link Disabled'}/>
                <Link classCSS={'linkDestructive'} text={'Link Destructive'}/>
            </div>

            <hr/>
            <hr/>

            {/*RoundButtons*/}
            <RoundButtons classCSS={'roundButton'} color={'white'}></RoundButtons>
            <RoundButtons classCSS={'roundButton'} color={'white'} colorBlock={'LightGrey'}></RoundButtons>
        </div>
    )
}

export default PresentationPage