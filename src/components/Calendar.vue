<template>
  <div>
    <button v-on:click="prevMonth">prevMonth</button>
    <button v-on:click="nextMonth">nextMonth</button>
    <button v-on:click="prevYear">prevYear</button>
    <button v-on:click="nextYear">nextYear</button>
    <h2>{{years}}/{{months}}/{{date}}</h2>
    <table class="calendar"  cellspacing="0">
      <thead>
      <tr>
        <td v-for="(value,index) in week">{{value}}</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(week,index) in weekends">
        <td v-for="(day,index) in week">
          {{day}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    computed: {
      weekends: function() {
        this.init();
        return this.weeks;
      }
    },
    data() {
      return {
        monthDayArr: [31,29,31,30,31,30,31,31,30,31,30,31],
        years: new Date().getFullYear(),
        months: new Date().getMonth() + 1,
        date: new Date().getDate(),
        week: ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'],
        weeks: []
      }
    },
    methods: {
      //返回当前月的日历
      init() {
        this.getMonthArr();
        this.initDoubleArr();
        this.initWeeks();
      },
      // 判断是否为闰年，是则返回true,否则返回false
      isLeapYear() {
        try {
          this.years = parseInt(this.years);
          if(this.years % 4 === 0 && this.years % 100 !== 0) {
            return true;
          } else {
            return false;
          }
        } catch(e) {
          console.log("this.years is NaN" + e.message);
        }

      },
      // 当是闰年时,二月为28天，否则为29天
      getMonthArr() {
        if(this.isLeapYear(this.years)) {
          this.monthDayArr = [31,28,31,30,31,30,31,31,30,31,30,31];
        } else {
          this.monthDayArr = [31,29,31,30,31,30,31,31,30,31,30,31];
        }
      },
      // 初始化一个二维数组，数组为arr[6][7]
      initDoubleArr() {
        this.weeks = new Array(6);
        for(let i=0;i<this.weeks.length;i++) {
          this.weeks[i] = new Array(7);
          for(let j=0;j<7;j++) {
            this.weeks[i][j] = '';
          }
        }
      },
      // 给数组赋予数据，根据年月日，赋予不同的数据，并进行赋值
      initWeeks() {
        let index = 1;
        let nextMonth = 1;
        for(let i=0;i<6;i++) {
          for(let j=0;j<7;j++) {
            // 是一个二维数组，数组从某个月的一号开始，
            // 若开始前没有填补第一行，从上一个月月末填补
            // 若结束后没有填补，从下一个月月初开始
            if(i===0&&j<this.getFirstDayDate()) {
              if(this.months===1) {
                this.weeks[i][j] = this.monthDayArr[11] - this.getFirstDayDate() + j + 1;
              } else {
                this.weeks[i][j] = this.monthDayArr[this.months-1] - this.getFirstDayDate() + j + 1;
              }
            } else if(index <= this.monthDayArr[this.months - 1]) {
              this.weeks[i][j] = index;
              index += 1;
            } else {
              this.weeks[i][j] = nextMonth++;
            }
          }
        }
      },
      // 获取某一年某一月的一号是星期几
      getFirstDayDate() {
        let dateStr = (this.months) + '/1/' + this.years;
        try {

          let time = new Date(dateStr);
          let day = time.getDay();
          if(day === 0) {
            return 6;
          }
          return day - 1;
        } catch(e) {
          console.log("tranform time is wrong!!!" + e.message);
        }
      },
      //下一个月
      nextMonth() {
        if(this.months===12) {
          this.months = 1;
        } else {
          this.months++;
        }
      },
      //上一月
      prevMonth() {
        if(this.months===1) {
          this.months = 12;
        } else {
          this.months--;
        }
      },
      //下一年
      nextYear() {
        if(this.years===9999) {
          this.years = 1;
        } else {
          this.years++;
        }
      },
      //上一年
      prevYear() {
        if(this.years===1) {
          this.years = 9999;
        } else {
          this.years--;
        }
      }
    }
  }
</script>
<style>
  .calendar {
    margin: 0 auto;
    width: 1000px;
    height: 632px;
    box-sizing: border-box;
    border: 1px solid #333;
    font-size: 16px;
  }
  .calendar thead {
    width: 100%;
    height: 30px;
  }
  .calendar tbody tr td{
    border: 1px solid #333;
    text-align: right;
    vertical-align: top;
  }
</style>
