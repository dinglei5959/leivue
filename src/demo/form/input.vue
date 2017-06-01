<template>
  <Page>
    <Widget padding>
      <Grid>
         <Row padding>
          <Input placeholder="input" type="text"  BounceType='collapse'>
              <SearchItem :list="list"></SearchItem>
          </Input>
        </Row>
        <Row padding>
          <Input placeholder="input" type="text" ></Input>
          <Input placeholder="number" type="number"></Input>
          <Input placeholder="password" type="password"></Input>
        </Row>
        <Row padding>
          <Input placeholder="input" type="text" width="200"></Input>
        </Row>
        <Row padding>
          <Input placeholder="input" type="text" :disabled="true"></Input>
        </Row>
        <Row padding>
          <Input placeholder="input" type="text" icon="search"></Input>
        </Row>
         <Row padding>
          <Input placeholder="input" type="text">
            <template slot="prepend">http://</template>
          </Input>
        </Row>
        <Row padding>
          <Input placeholder="input" type="text">
            <template slot="append">.com</template>
          </Input>
        </Row>
        <Row padding>
          <Input placeholder="input" type="text">
            <template slot="prepend">http://</template>
            <template slot="append">.com</template>
          </Input>
        </Row>
       
      </Grid>
    </Widget>
  </Page>
</template>

<script>
  export default{
    data () {
      return {
        val: '',
        list: [ {
          name: '四法青云'
        },
        {
          name: '魏武青红'
        },
        {
          name: '炎月青龙'
        },
        {
          name: '天龙破城'
        }]
      }
    },
    methods: {
      getVal (item, i) {
        this.val = item[0].name
      }
    },
    created () {
  
    },
    mounted () {
  
    }
  }
</script>

<style lang="scss" scoped>
  
</style>
