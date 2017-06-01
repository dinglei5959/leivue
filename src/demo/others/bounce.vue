<template>
  <Page>
    <Widget padding>
      <Grid>
        <Column size="4">
          <Button type="primary" @click.native="fCtoT(1)">点击</Button>
            <div v-show="lei1"  class="transition-box">
              普通
            </div>
        </Column>
      </Grid>
      <Grid>
        <Column size="4">
          <Button type="primary" @click.native="fCtoT(2)">点击</Button>
          <Bounce name="hidden-x">
            <div v-show="lei2"  class="transition-box">
              x轴的收缩消失
            </div>
          </Bounce>
        </Column>
        <Column size="4">
          <Button type="primary" @click.native="fCtoT(3)">点击</Button>
          <Bounce name="hidden-y">
            <div v-show="lei3"  class="transition-box">
              y轴的收缩消失
            </div>
          </Bounce>
        </Column>
      </Grid>
      <Grid>
        <Column size="4">
          <Button type="primary" @click.native="fCtoT(4)">点击</Button>
          <Bounce name="hidden-y-top">
            <div v-show="lei4"  class="transition-box">
              y轴至顶收缩消失
            </div>
          </Bounce>
        </Column>
        <Column size="4">
          <Button type="primary" @click.native="fCtoT(5)">点击</Button>
          <Bounce name="hidden-y-bottom">
            <div v-show="lei5"  class="transition-box">
              y轴至底收缩消失
            </div>
          </Bounce>
        </Column>
        <Column size="4">
          <Button type="primary" @click.native="fCtoT(6)">点击</Button>
          <Bounce name="hidden-x-left">
            <div v-show="lei6"  class="transition-box">
              x轴至左收缩消失
            </div>
          </Bounce>
        </Column>
        <Column size="4">
            <Button type="primary" @click.native="fCtoT(7)">点击</Button>
            <Bounce name="hidden-x-right">
              <div v-show="lei7"  class="transition-box">
                x轴至左收缩消失
              </div>
            </Bounce>
          </Column>
          <Column size="4">
            <Button type="primary" @click.native="fCtoT(7)">点击</Button>
            <Bounce name="hidden-x-right">
              <div v-show="lei7"  class="transition-box">
                x轴至左收缩消失
              </div>
            </Bounce>
          </Column>
          <Column size="4">
            <Button type="primary" @click.native="fCtoT(7)">点击</Button>
            <Bounce name="hidden-x-right">
              <div v-show="lei7"  class="transition-box">
                x轴至左收缩消失
              </div>
            </Bounce>
          </Column>
          <Column size="4">
            <Button type="primary" @click.native="fCtoT(7)">点击</Button>
            <Bounce name="hidden-x-right">
              <div v-show="lei7"  class="transition-box">
                x轴至左收缩消失
              </div>
            </Bounce>
          </Column>
        </Grid>
      </Grid>
      <Grid>
        <Column size="4">
            <div style="height:500px">
            <Button type="primary" id="dd" @click.native="fCtoT(8)">点击</Button>
              <Bounce type="collapse">
                <div v-show="lei8" class="collapse-transition">
                  <div class="transition-box">
                    collapse
                  </div>
                  <div class="transition-box">
                    collapse
                  </div>
                  <div class="transition-box">
                    collapse
                  </div>
                </div>
              </Bounce>
            </div>
        </Column>
      </Grid>
    </Widget>
  </Page>
</template>

<script>
  export default{
    data: () => ({
      lei1: true,
      lei2: true,
      lei3: true,
      lei4: true,
      lei5: true,
      lei6: true,
      lei7: true,
      lei8: true
    }),
    methods: {
      fCtoT (type) {
        this['lei' + type] = !this["lei"+type];
      }
    },
    created () {
      this.lei8 = false
  },
    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .transition-box{
    margin: 10px 0;
    width: 160px;
    height: 100px;
    border-radius: 4px;
    background-color: #20A0FF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
