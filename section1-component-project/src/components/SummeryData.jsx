

export function Uri()
{
   return (
    
    <div>
      <Summaryheading/>
     <ul>
      <li>
Plot Essence: Based on the 2016 Uri attack, Major Vihaan leads a covert operation.
      </li>
      <li>
        Themes: Patriotism, military strategy, sacrifice.
      </li>
      <li>
      Impact: Revolutionized Indian cinema with visual effects and box office records.
      </li>
     </ul>
     </div>
   )
}
export function Baahubali()
{
   return (
    <div>
      <Summaryheading/>
     <ul>
      <li typeof="number">
         Plot Essence: Cooper travels through a wormhole to save humanity.
      </li>
      <li>
       Themes: Love, sacrifice, time relativity, survival.
      </li>
      <li>
      Impact: Acclaimed for blending science with emotional storytelling and visuals.
      </li>
     </ul>
     </div>
   )
}
function Summaryheading()
{
   return(<h3>SUMMARY</h3>);
}
export function Interstellar()
{
   return (
    <div>
     <Summaryheading/>
     <ul>
      <li>
Plot Essence: Shivudu discovers his royal lineage and destiny.
      </li>
      <li>
        Themes: Power, betrayal, destiny.
      </li>
      <li>
        Impact: Revolutionized Indian cinema with visual effects and box office records.
      </li>
     </ul>
     </div>
   )
}


export function MovieSummery({ children }) {
  return <div>{children}</div>;
}
