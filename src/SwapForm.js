import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Grid from '@mui/material/Grid';

const SwapForm = ({
  setHat,
  setEyes,
  setMouth,
  setAccessory,
  setBackground,
  defaultHat,
  defaultEyes,
  defaultMouth,
  defaultAccessory,
  defaultBackground
}) => {

  const handleSwapHat = (e) => setHat(e.target.value);
  const handleSwapEyes = (e) => setEyes(e.target.value);
  const handleSwapMouth = (e) => setMouth(e.target.value);
  const handleSwapAccessory = (e) => setAccessory(e.target.value);
  const handleSwapBackground = (e) => setBackground(e.target.value);

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Hats</FormLabel>
          <RadioGroup
            aria-label="hat"
            defaultValue={defaultHat}
            name="radio-buttons-group"
          >
            <FormControlLabel value={defaultHat} onClick={handleSwapHat} control={<Radio />} label="Default" />
            <FormControlLabel value="santa_hat" onClick={handleSwapHat} control={<Radio />} label="Santa Hat" />
            <FormControlLabel value="antlers" onClick={handleSwapHat} control={<Radio />} label="Antlers" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Backoground</FormLabel>
          <RadioGroup
            aria-label="hat"
            defaultValue={defaultBackground}
            name="radio-buttons-group"
          >
            <FormControlLabel value={defaultBackground} onClick={handleSwapBackground} control={<Radio />} label="Default" />
            <FormControlLabel value="first_snow" onClick={handleSwapBackground} control={<Radio />} label="First Snow" />
            <FormControlLabel value="tree_lighting" onClick={handleSwapBackground} control={<Radio />} label="X-mas Tree" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Mouth</FormLabel>
          <RadioGroup
            aria-label="mouth"
            defaultValue={defaultMouth}
            name="radio-buttons-group"
          >
            <FormControlLabel value={defaultMouth} onClick={handleSwapMouth} control={<Radio />} label="Default" />
            <FormControlLabel value="bell" onClick={handleSwapMouth} control={<Radio />} label="Bell" />
            <FormControlLabel value="santa_beard" onClick={handleSwapMouth} control={<Radio />} label="Santa Beard" />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default SwapForm;

/*
<Grid item xs={4}>
  <FormControl component="fieldset">
    <FormLabel component="legend">Eyes</FormLabel>
    <RadioGroup
      aria-label="eyes"
      defaultValue={defaultEyes}
      name="radio-buttons-group"
    >
      <FormControlLabel value={defaultEyes} onClick={handleSwapEyes} control={<Radio />} label="Default" />
      <FormControlLabel value="rudolph" onClick={handleSwapEyes} control={<Radio />} label="Rudolph" />
    </RadioGroup>
  </FormControl>
</Grid>
<Grid item xs={4}>
  <FormControl component="fieldset">
    <FormLabel component="legend">Accessory</FormLabel>
    <RadioGroup
      aria-label="eyes"
      defaultValue={defaultAccessory}
      name="radio-buttons-group"
    >
      <FormControlLabel value={defaultAccessory} onClick={handleSwapAccessory} control={<Radio />} label="Default" />
      <FormControlLabel value="candy_cane" onClick={handleSwapAccessory} control={<Radio />} label="Candy Cane" />
      <FormControlLabel value="gift" onClick={handleSwapAccessory} control={<Radio />} label="Gift" />
    </RadioGroup>
  </FormControl>
</Grid>
*/
