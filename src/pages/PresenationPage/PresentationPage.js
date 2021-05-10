import {BUTTON_SIZE} from "../../constants/buttonSizes";
import Button from "../../components/Buttons";
import Text from "../../components/Text";
import Link from "../../components/Link";
import RoundButtons from "../../components/RoundButtons";
import {Menu} from "../../assets";

function PresentationPage() {

    return (
        <div>
            <h1>
                Presentation Page
            </h1>
            <div className="buttonBox">
                <Button
                    classN={'primary'}
                    color={'blue'}
                    text={'Primary'}>
                </Button>
                <Button classN={'primary'}
                        color={"blue"}
                        text={'Previous step'}>
                </Button>
                <Button classN={'primary'}
                        color={"blue"}
                        text={'Continue'}>
                </Button>
                <Button classN={'primary'}
                        color={"blue"}
                        text={'Create New'}>
                </Button>
                <Button classN={'primary'}
                        size={BUTTON_SIZE.small}
                        color={"blue"}
                        text={'Primary'}>
                </Button>

                <Button classN={'secondary'}
                        color={"Gainsboro"}
                        text={'Secondary'}>
                </Button>
                <Button classN={'secondaryLight'}
                        color={"inherit"}
                        text={'Secondary light'}>
                </Button>
                <Button classN={'secondaryDark'}
                        color={"#00000F"}
                        text={'Secondary'}>
                </Button>
                <Button classN={'disabled'}
                        text={'Disabled'}>
                </Button>

                <Button spinner={BUTTON_SIZE.spinner}>
                </Button>

                <Button classN={'active'}
                        color={"LightSlateGray"}
                        text={'Active'}>
                </Button>
                <Button classN={'activeVariant'}
                        color={"#D5E7EB"}
                        text={'Active variant'}>
                </Button>
                <Button classN={'destructive'}
                        color={"#CE2743"}
                        text={'Destructive'}>
                </Button>
                <Button>
                </Button>
                <Button classN={'ownTheZone'}
                        color={"#0D192E"}
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