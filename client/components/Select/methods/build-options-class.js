export default function(len) {
  let ocClass = "options-container";

  if (len > 4) ocClass += " scroll";
  else ocClass += " flex fd-c jc-sa";

  if (this.state.topInset && this.state.botInset && len > 4) ocClass += " bothInset";
  else if (this.state.topInset && len > 4) ocClass += " topInset";
  else if (this.state.botInset && len > 4) ocClass += " botInset";
  
  return ocClass;
}