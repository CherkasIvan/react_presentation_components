import {BUTTON_SIZE} from "../../constants/buttonSizes";
import Button from "../../components/Buttons";
import Texts from "../../components/Texts";
import Links from "../../components/Links";

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
                <Button icon={".autorenew_black_24dp.svg"}>
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
                <Button icon={".autorenew_black_24dp.svg"}>
                </Button>
                <Button classN={'ownTheZone'}
                        color={"#0D192E"}
                        text={'Own the zone'}>

                    <img src="C:\Users\Disto\Desktop\Programing\front-end\TeachMeSkills\React\reactRostislav\lesson1\src\assets\images\star_black_24dp.svg"/>

                </Button>
                <select >
                    <option value="artwork">Upload Artwork</option>
                    <option value="map">New Map</option>
                    <option value="schedule">New Schedule</option>
                </select>
            </div>
            <hr/>
            <hr/>
            <Texts tag={'h1'}
                   text={'Heading 1'}>
            </Texts>
            <hr/>
            <Texts tag={'h2'}
                   text={'Heading 2'}>
            </Texts>
            <hr/>
            <Texts tag={'h3'}
                   text={'Heading 3'}>
            </Texts>
            <hr/>
            <Texts tag={'h4'}
                   text={'Heading 4'}>
            </Texts>
            <hr/>
            <Texts classN={'bigP'}
                   tag={'p'}
                   text={"We are ssionate about designing to enrich and enhance your " +
                   "lifestyle and this translates into your home interior design. Our firm is made up" +
                   " of an amazing mix of architects, interior designers, interior decorators and manufacturers. " +
                   "We are professional, committed and passionate about our work."}>
            </Texts>
            <hr/>
            <Texts classN={'smallP'}
                   tag={'p'}
                   text={"We are a team of professional photographers and videographers who would" +
                   " love to share our passion and knowledge with you!"}>
            </Texts>
            <hr/>
            <hr/>
            <div className='linksBox'>
                <Links classN={'linkPrimary'} text={'Link Primary'}></Links>
                <Links classN={'linkSecondary'} text={'Link Secondary'}></Links>
                <Links classN={'linkDisabled'} text={'Link Disabled'}></Links>
                <Links classN={'linkDistructive'} text={'Link Distructive'}></Links>
            </div>
        </div>
    )
}

export default PresentationPage