import Text from "components/Text";
import Buttons from "components/Buttons/Buttons";
import {colors} from "styles";
import {BUTTON_SIZE} from "constants/buttonSizes";
import {QuizFormStyle} from "modules/Quiz/FormQuizStyles";

function Quiz({style}) {

  return (
    <div>
      <QuizFormStyle>
        <Text variant='h1' styleVariant={'Sign in '}>Ответьте на вопросы</Text>
        <Buttons color={colors.ABSOLUTE_BLACK}
                 size={BUTTON_SIZE.big}
                 text='Повторить'
                 style={style}
                 type='submit'/>
    </QuizFormStyle>
    </div>
  )
}

export default Quiz;