## Prop type Validation

`npm install --save props-types`

```js
import React from "react";
import PropTypes from "prop-types";

export const BurgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <StyledBreadBottom></StyledBreadBottom>;
      break;
    case "bread-top":
      ingredient = (
        <StyledBreadTop>
          <StyledSeedsOne></StyledSeedsOne>
          <StyledSeedsTwo></StyledSeedsTwo>
        </StyledBreadTop>
      );
      break;
    case "cheese":
      ingredient = <StyledCheese></StyledCheese>;
      break;
    case "salat":
      ingredient = <StyledSalat></StyledSalat>;
      break;
    default:
      ingredient = null;
  }

  BurgerIngredient.propTypes = {
    // PropTypes from the import
    type: PropTypes.string.isRequired,
  };

  return ingredient;
};
```
