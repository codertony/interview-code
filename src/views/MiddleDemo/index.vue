<template>
  <div class="middle-demo">
    <h3>垂直水平居中</h3>
    <div class="level-vertical row">
      <BoxItem
              title="需要设置父元素行高"
              :child-length="2"
              type="line-height"
      />
      <BoxItem
              title="不限制"
              :child-length="2"
              type="flex-column"
      />
      <BoxItem
              title="不限制"
              :child-length="2"
              type="flex-align-items"
      />
      <BoxItem
              title="不限制"
              :child-length="1"
              type="flex-margin"
      />
      <BoxItem
              title="子元素宽高限制"
              :child-length="1"
              type="position-margin"
      />
      <BoxItem
              title="子元素宽高限制"
              :child-length="1"
              type="position-margin-auto"
      />
      <BoxItem
              title="无限制"
              :child-length="1"
              type="position-transform"
      />
      <BoxItem
              title="无限制"
              :child-length="1"
              type="grid"
      />
      <div class="">
        <BoxItem
                title="需要三层元素才能实现, 第一层不可以是flex"
                :child-length="2"
                type="table-cell"
        />
      </div>
    </div>
    <hr />
    <h3>垂直居中</h3>
    <div class="vertical row">
      <BoxItem
        :child-length="1"
        type="line-height"
      />
      <BoxItem
        :child-length="2"
        type="flex-column"
      />
      <BoxItem
        :child-length="2"
        type="flex-align-items"
      />
      <BoxItem
        :child-length="1"
        type="flex-margin-auto"
      />
      <BoxItem
        :child-length="1"
        type="position-margin"
      />
      <BoxItem
        :child-length="1"
        type="position-margin-auto"
      />
      <BoxItem
        :child-length="1"
        type="position-transform"
      />
    </div>
    <hr />
    <h3>水平居中</h3>
    <div class="level row">
      <div class="parent text-align">
        <div class="child">
          水平居中
          <br />
          text-align
        </div>
        <div class="child">
          水平居中
          <br />
          text-align
        </div>
      </div>
      <div class="parent margin-auto">
        <div class="child">
          水平居中
          <br />
          margin-auto
        </div>
      </div>
      <div class="parent table-margin-auto">
        <div class="child">
          水平居中
          <br />
          table-margin-auto
        </div>
      </div>
      <div class="parent flex">
        <div class="child">
          水平居中
          <br />
          flex
        </div>
        <div class="child">
          水平居中
          <br />
          flex
        </div>
      </div>
      <div class="parent flex-margin-auto">
        <div class="child">
          水平居中
          <br />
          flex-margin-auto
        </div>
      </div>
      <div class="parent position-margin">
        <div class="child">
          水平居中
          <br />
          position-margin
        </div>
      </div>
      <div class="parent position-margin-auto">
        <div class="child">
          水平居中
          <br />
          position-margin-auto
        </div>
      </div>
      <div class="parent position-transform">
        <div class="child">
          水平居中
          <br />
          position-transform
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>
<script>
  import BoxItem from './BoxItem'
  export default {
    components: {
      BoxItem
    }
  }
</script>
<style lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;
  .parent {
    flex: 0 0 auto;
    margin: 8px;
    height: 200px;
    width: 250px;
    text-align: left;
    background: #a6a6a6;
    .child {
      background: #bffaff;
      color: red;
    }
  }
}

.level-vertical {
  .line-height {
    line-height: 200px;
    text-align: center;
    .child {
      vertical-align: middle;
      display: inline-block;
      line-height: 1;
      margin: 2px;
    }
  }

  .flex-column {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .child {
      margin: 1px 0;
    }
  }

  .flex-align-items {
    display: flex;
    align-items: center;
    justify-content: center;
    .child {
      margin: 0 1px;
    }
  }

  .flex-margin {
    display: flex;
    /*display: grid;*/
    .child {
      margin: auto;
    }
  }

  .position-margin {
    position: relative;
    .child{
      position: absolute;
      height: 50px;
      width: 120px;
      top: 50%;
      left: 50%;
      margin-top: -25px;
      margin-left: -60px;
    }
  }

  .position-margin-auto {
    position: relative;
    .child {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      height: 50px;
      width: 150px;
    }
  }

  .position-transform {
    position: relative;
    .child {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .grid {
    display: grid;
    .child {
      justify-self: center;
      align-self: center;
    }
  }

  .table-cell {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    .child {
      display: inline-block;
      margin: 1px;
    }
  }
}

.vertical {
  .line-height {
    line-height: 200px;
    .child {
      vertical-align: middle;
      display: inline-block;
      line-height: 1;
    }
  }

  .flex-column {
    display: flex;
    justify-content: center;
    flex-direction: column;
    .child {
      margin: 8px 0;
    }
  }

  .flex-align-items {
    display: flex;
    align-items: center;
    .child {
      margin: 0 1px;
    }
  }

  .flex-margin-auto {
    display: flex;
    /*display: grid;*/
    .child {
      margin: auto 0;
    }
  }

  .position-margin {
    position: relative;
    .child{
      position: absolute;
      height: 50px;
      top: 50%;
      left: 0;
      margin-top: -25px;
    }
  }

  .position-margin-auto {
    position: relative;
    .child {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      height: 50px;
    }
  }

  .position-transform {
    position: relative;
    .child {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

.level {
  .text-align {
    text-align: center;
    .child {
      display: inline-block;
      margin: 0 8px;
    }
  }

  .margin-auto {
    .child {
      width: 100px;
      margin: auto;
    }
  }

  .table-margin-auto {
    .child {
      display: table;
      margin: auto;
    }
  }

  .flex {
    display: flex;
    justify-content: center;
    .child {
      margin: 0 8px;
    }
  }
  .position-margin {
    position: relative;
    .child{
      position: absolute;
      width: 100px;
      top: 0;
      margin-left: -50px;
      left: 50%;
    }
  }

  .position-margin-auto {
    position: relative;
    .child {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      width: 100px;
    }
  }

  .position-transform {
    position: relative;
    .child {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .flex-margin-auto {
    /*display: flex;*/
    display: grid;
    .child {
      margin: 0 auto;
    }
  }
}
</style>