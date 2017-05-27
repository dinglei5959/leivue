<template>
  <Page>
    <Widget padding>
      <Grid>
        <Row padding>
          <Input placeholder="input" type="input"></Input>
          <Input placeholder="number" type="number"></Input>
          <Input placeholder="password" type="password"></Input>
        </Row>
        <Row padding>
          <Input placeholder="input" type="input" :disabled="true"></Input>
        </Row>
        <Row padding>
          <Input placeholder="input" type="input" icon="search"></Input>
        </Row>
         <Row padding>
          <Input placeholder="input" type="input">
            <template slot="prepend">http://</template>
          </Input>
        </Row>
      </Grid>
    </Widget>
  </Page>
</template>

<script>
  export default{
    created () {
  
    },
    mounted () {
  
    }
  }
</script>

<style lang="scss" scoped>
  
</style>
