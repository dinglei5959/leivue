<template>
  <Page  padding text-center>
      <div id="summary" class="panel">
          <h2>Button 按钮</h2>
          <p>button的封装，组件化，虽然比较简单</p>
          <Widget border-bottom-grey padding>
            <Grid>
              <Row>基础按钮</Row>
              <Row padding>
                <Button>button</Button>
                <Button type="primary">primary</Button>
                <Button type="text">text</Button>
              </Row>
            </Grid>
          </Widget>
          <Widget border-bottom-grey padding>
            <Grid>
              <Row>禁止按钮</Row>
              <Row padding>
                <Button type="disabled"  @click.native="test">disabled点击我事件不发生</Button>
                <Button type="primary" @click.native="test">primary点击我有事件</Button>
              </Row>
            </Grid>
          </Widget>
          <Widget border-bottom-grey padding>
            <Grid>
              <Row>各种按钮</Row>
              <Row padding>
                <Button type="success">success</Button>
                <Button type="warning">warning</Button>
                <Button type="danger">danger</Button>
                <Button type="info">info</Button>
              </Row>
            </Grid>
          </Widget>
          <Widget border-bottom-grey padding>
            <Grid>
              <Row>各种尺寸按钮</Row>
              <Row padding>
                <Button type="primary" size="big">big</Button>
                <Button type="primary" size="normal">normal</Button>
                <Button type="primary" size="small">small</Button>
                <Button type="primary" size="tiny">tiny</Button>
              </Row>
            </Grid>
          </Widget>
          <Widget border-bottom-grey padding>
            <Grid>
              <Row>按钮组</Row>
              <Row padding>
                <ButtonGroup>
                  <Button type="primary" >上一页</Button>
                  <Button  >1</Button>
                  <Button  >2</Button>
                  <Button type="primary" >下一页</Button>
                </ButtonGroup>
              </Row>
            </Grid>
          </Widget>
      </div>
  </Page>
</template>

<script>
  export default{
    data () {
      return {

      }
    },
    methods: {
      test () {
        window.alert('意不意外，惊不惊喜！！')
      }
    }
  }
</script>

<style lang="scss">
  .demo [class*=flex-item]{
    background-color:#fff;
  }
</style>
