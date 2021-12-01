# Utils Format

## Introduction

The library fulfills the requirements given by the products that I have made

## Installation

```js
npm install utils-format --save
```

## Usage

```js
const iDate = require('format-utils/iDate');
```
OR
```js
import iDate from 'format-utils/iDate';
```

## Available Format

### iDate

Date format based on specific requirements (best suited for Vietnam)

```js
let date = iDate(null,"Ngay {j} thang {n} nam {f}");
// Ngay 01 thang 12 nam 2021
```

#### Type of format
* The many character represents the type of format.
  * `D`: day of the week
  * `H`: hours
  * `J`: day of the month
  * `M`: minutes
  * `N`: month of Vietnamese
  * `O`: date
  * `S`: seconds
  * `d`: day of the week of Vietnamese
  * `f`: years
  * `h`: hour of Vietnamese
  * `j`: day of the month of Vietnamese
  * `m`: minutes of Vietnamese
  * `n`: month of Vietnamese
  * `s`: seconds of Vietnamese
  * `t`: get time
  * `u`: timestamp
  * `y`: 2 last number of years
  * `A`: PM/AM
  * `Month`: January
  * `Mo`: Jan

### iParam

Encode param in url

Still growing ...