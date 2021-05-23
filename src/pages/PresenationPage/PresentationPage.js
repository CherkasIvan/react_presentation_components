import Buttons from "../../components/Buttons";
import Text from "../../components/Text";
import NavigationLink from '../../components/NavigationLink'
import {useState} from 'react';
import pageRouter from '../../constants/pageRouter'
import Link from "../../components/Link";
import RoundButtons from "../../components/RoundButtons";
import {Menu, Star, Add, East, Notification} from '../../assets'
import "./PresentationPage.css"
import Spiner from '../../components/Spiner'
import colors from '../../styles/colors'
import {AddIcon, StarFilledIcon, StarUnFilledIcon, NavigationListWrapper} from './PresentationPageStyles'
import HeaderMenuBar from '../../modules/HeaderMenuBar'
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import FormName from "../../components/FormName";

function PresentationPage() {

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '25ch',
        },
        button: {
            margin: theme.spacing(2),
        },
    }));
    const classes = useStyles();
    const [buttonState, setButtonState] = useState(false);

    const handleClick = () => {
        setButtonState(!buttonState);
    }

    return (
        <div>
            <FormName/>
            <HeaderMenuBar>
                <NavigationListWrapper>
                    <NavigationLink href={pageRouter.PRESENTATION}>Presentation</NavigationLink>
                    <NavigationLink href={pageRouter.HOME}>Home</NavigationLink>
                    <NavigationLink href={pageRouter.PROFILE}>Profile</NavigationLink>
                    <NavigationLink href={pageRouter.SIGN_IN}>Sign in</NavigationLink>
                    <NavigationLink href={pageRouter.CONTACT}>Contact</NavigationLink>
                    <Star></Star>
                </NavigationListWrapper>
            </HeaderMenuBar>
            <h1>
                Presentation Page
            </h1>

            <div className="buttonBox">
                <Buttons text={'Primary'}
                        color={colors.PRIMARY}>
                </Buttons>
                <Buttons text={'Continue'}
                        children={<AddIcon/>}>
                </Buttons>
                <Buttons text={'Previos step'}/>
                <Buttons text={'Create new'}/>
                <Buttons text={'Primary'}/>

                <Buttons color={colors.DARK}
                        text={'Own the zone'}
                        onClick={handleClick}
                >
                    {buttonState ? <StarFilledIcon/> : <StarUnFilledIcon/>}
                </Buttons>

                <Buttons children={<Spiner/>}></Buttons>
            </div>
            <hr/>
            <hr/>

            {/*Text*/}
            <Text variant='h1' styleVariant={'header'}>Heading 1</Text>
            <Text variant='h2'>Heading 2</Text>
            <Text variant='h3'>Heading 3</Text>
            <Text variant='h4'>Heading 4</Text>
            <Text styleVariant={'bigP'}>Tristique tellus ultrices lacus facilisi purus dictum a rutrum adipiscing,
                vestibulum nam senectus
                pretium sapien maximus habitasse natoque laoreet, gravida pharetra lorem inceptos euismod vulputate nunc
                massa.</Text>
            <Text variant='description' styleVariant={'smallP'}>Lorem ipsum dolor sit amet consectetur adipiscing elit
                nullam, facilisi cursus
                lacinia a faucibus montes eu porttitor, nostra phasellus conubia blandit justo dapibus rutrum. Tristique
                magna aliquam eleifend duis pellentesque facilisi nibh porta varius himenaeos, hac inceptos mollis
                efficitur dapibus condimentum dis sit integer euismod nostra, feugiat hendrerit congue taciti primis nec
                rutrum ligula blandit. </Text>
            <hr/>
            <hr/>

            {/*Links*/}
            <div className='linksBox'>
                <Link styleVariant={'linkPrimary'} text={'Link Primary'}/>
                <Link styleVariant={'linkSecondary'} text={'Link Secondary'}/>
                <Link styleVariant={'linkDisabled'} text={'Link Disabled'}/>
                <Link styleVariant={'linkDestructive'} text={'Link Destructive'}/>
            </div>

            <hr/>
            <hr/>

            {/*RoundButtons*/}
            <div>
                <RoundButtons><Menu></Menu></RoundButtons>
                <RoundButtons><Star></Star></RoundButtons>
                <RoundButtons><Add></Add></RoundButtons>
                <RoundButtons><East></East></RoundButtons>
                <RoundButtons><Notification></Notification></RoundButtons>
            </div>

            <div className='Grey'>
                <RoundButtons><Menu></Menu></RoundButtons>
                <RoundButtons><Star></Star></RoundButtons>
                <RoundButtons><Add></Add></RoundButtons>
                <RoundButtons><East></East></RoundButtons>
                <RoundButtons><Notification></Notification></RoundButtons>
            </div>
            <hr/>

            <TextField
                id="outlined-full-width"
                label="Enter your name"
                placeholder="Name should be here"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                variant="filled"
            />
            <Button
                variant="contained"
                color="primary"
                size="big"
                className={classes.button}
                startIcon={<SaveIcon />}
                disableElevation
            >
                Save your name
            </Button>
        </div>
    )
}

export default PresentationPage