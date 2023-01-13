import { useState } from "react";
import "./App.css";
import PricingMain from "./components/PriceMain";
import { PriceTable } from "./type";

const initialPriceTable: PriceTable[] = [
  { viewRange: "10K", price: 8.0 },
  { viewRange: "50K", price: 12.0 },
  { viewRange: "100K", price: 16.0 },
  { viewRange: "500K", price: 24.0 },
  { viewRange: "1M", price: 36.0 },
];

function App() {
  const [priceTable, setPriceTable] = useState<PriceTable[]>(initialPriceTable);
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [viewRange, setViewRange] = useState<string>("10K");
  const [price, setPrice] = useState<number>(priceTable[0].price);
  const [switchChecked, setSwitchChecked] = useState<boolean>(false);
  const [trial, setTrial] = useState<boolean>(false);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.value);
    setSliderValue(index);
    setViewRange(priceTable[index].viewRange);
    setPrice(priceTable[index].price);
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const discountPrice = initialPriceTable.map((priceRow) => {
        return { viewRange: priceRow.viewRange, price: priceRow.price * 0.75 };
      });
      setPriceTable(discountPrice);
      setPrice(discountPrice[sliderValue].price);
    } else {
      setPriceTable(initialPriceTable);
      setPrice(initialPriceTable[sliderValue].price);
    }
    setSwitchChecked(event.target.checked);
  };

  const handleTrialButton = () => {
    setTrial(true);
  };

  return (
    <div className="App">
      <h1 className="App-title">Simple, traffic-based pricing</h1>
      <div className="App-sub-title">
        <span>Sign-up for our 30-day trial.</span>
        <span>No credit card required.</span>
      </div>

      <PricingMain
        onSliderChange={handleSliderChange}
        sliderValue={sliderValue}
        switchChecked={switchChecked}
        onSwitchChange={handleSwitchChange}
        onClickTrail={handleTrialButton}
        viewRange={viewRange}
        price={price}
        trail={trial}
      />
    </div>
  );
}

export default App;
