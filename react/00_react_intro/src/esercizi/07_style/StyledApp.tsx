import ToggleButton from "./ConditionalStyle/ToggleButton/ToggleButton"
import GenericButton from "./GenericButton/GenericButton"
import GenericButtonRed from "./GenericButtonRed/GenericButtonRed"
import ModuleButtonBlue from "./ModuleButtonBlue/ModuleButtonBlue"
import ModuleButtonRed from "./ModuleButtonRed/ModuleButtonRed"

const StyledApp = () => {
  return (
    <>
      {/* <GenericButton
        label="Clicca qui"
        onClickFn={() => console.log('cliccato')}>
      </GenericButton>

      <GenericButtonRed
        label="Clicca qui"
        onClickFn={() => console.log('cliccato')}>
      </GenericButtonRed>  */}

      {/* <ModuleButtonBlue
        label="Clicca qui"
        onClickFn={() => console.log('cliccato')}>
      </ModuleButtonBlue>

      <ModuleButtonRed
        label="Clicca qui"
        onClickFn={() => console.log('cliccato')}>
      </ModuleButtonRed>  */}
      <ToggleButton></ToggleButton>

   

    </>
  )
}

export default StyledApp
