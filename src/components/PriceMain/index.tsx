import { PriceProps } from "../../type";
import "./style.css";

function PricingMain({
  onSliderChange,
  sliderValue,
  switchChecked,
  onSwitchChange,
  onClickTrail,
  viewRange,
  price,
  trail,
}: PriceProps) {
  return (
    <div className="price-main">
      <div className="main-top">
        <div className="main-tag">
          <span className="viewRange"> {viewRange} PAGEVIEWS</span>
          <span className="month-price">
            <span className="price">$ {price}</span> / month
          </span>
        </div>
        <div>
          <input
            className="slider"
            type="range"
            min="0"
            max="4"
            value={sliderValue}
            onChange={onSliderChange}
            style={{
              background: `linear-gradient(to right, #0fd9c8 0%, #0fd9c8 ${
                25 * sliderValue
              }%, #e9e9e9 ${25 * sliderValue}%, #e9e9e9 100%)`,
            }}
          />
          <span className="month-price-mobile">
            <span className="price">$ {price}</span> / month
          </span>
        </div>
        <div className="main-switch">
          <span className="switch-text">Monthly Billing</span>
          <label className="switch">
            <input
              className="checkbox"
              type="checkbox"
              checked={switchChecked}
              onChange={onSwitchChange}
            />
            <span className="toggle"></span>
          </label>
          <span className="switch-text">
            Yearly Billing <span className="discount">25% discount</span>
            <span className="discount-mobile">-25%</span>
          </span>
        </div>
      </div>
      <div className="main-bottom">
        <div className="main-features">
          <span className="feature">Unlimited websites</span>
          <span className="feature">100% data ownership</span>
          <span className="feature">Email reports</span>
        </div>
        <button className="main-button" onClick={onClickTrail}>
          Start my trial
        </button>
      </div>
    </div>
  );
}

export default PricingMain;
