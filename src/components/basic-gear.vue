<template>
  <div class="basic-gear">
    <span class="font-large bold uppercase">basic gear</span>
    <div class="table-row">
      <span class="bold uppercase">Item</span>
      <span class="bold uppercase">Cost</span>
      <span class="bold uppercase">Quantity</span>
    </div>
    <div class="table-row">
      <span>Arrows (20)</span>
      <span>1gp</span>
      <span>1-20</span>
    </div>
    <div class="table-row">
      <span>Backpack</span>
      <span>2gp</span>
      <span>1 (1 Free)</span>
    </div>
    <div class="table-row">
      <span>Caltrops (one bag)</span>
      <span>5sp</span>
      <span>1</span>
    </div>
    <div class="table-row">
      <span>Coin</span>
      <span>Varies</span>
      <span>100 (100 Free)</span>
    </div>
    <div class="table-row">
      <span>Coin</span>
      <span>Varies</span>
      <span>100 (100F)</span>
    </div>
    <div class="table-row">
      <span>Crossbow bolts (20)</span>
      <span>1gp</span>
      <span>1-20</span>
    </div>
    <div class="table-row">
      <span>Crowbar</span>
      <span>5sp</span>
      <span>1</span>
    </div>
    <div class="table-row">
      <span>Flask or bottle</span>
      <span>3sp</span>
      <span>1</span>
    </div>
    <div class="table-row">
      <span>Flint and steel</span>
      <span>5sp</span>
      <span>1</span>
    </div>
    <div class="table-row">
      <span>Gem</span>
      <span>Varies</span>
      <span>1-10</span>
    </div>
    <div class="table-row">
      <span>Grappling hook</span>
      <span>1gp</span>
      <span>1</span>
    </div>
    <div class="table-row">
      <span>Iron spikes (10)</span>
      <span>1gp</span>
      <span>1-10</span>
    </div>
    <div class="table-row">
      <span>Lantern</span>
      <span>5gp</span>
      <span>1</span>
    </div>
    <div class="table-row">
      <span>Mirror</span>
      <span>10gp</span>
      <span>1</span>
    </div>
    <div class="table-row">
      <span>Oil, flask</span>
      <span>5sp</span>
      <span>1</span>
    </div>
    <div class="table-row">
      <span>Pole</span>
      <span>5sp</span>
      <span>1</span>
    </div>
    <div class="table-row">
      <span>Rations (3)</span>
      <span>5sp</span>
      <span>1-3</span>
    </div>
    <div class="table-row">
      <span>Rope, 60'</span>
      <span>1gp</span>
      <span>1</span>
    </div>
    <div class="table-row">
      <span>Torch</span>
      <span>5sp</span>
      <span>1</span>
    </div>
    <div class="crawling-kit">
      <span>
        <span class="font-small bold uppercase">Crawling kit</span>
        For <span class="bold">7gp</span> you get Backpack, Flint and steel,
        Torch(2), Rations(3), Iron spikes(10), Grappling hook, Rope (60')
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.basic-gear {
  align-self: center;
  align-items: center;
  gap: 10px;
  max-width: 800px;

  .crawling-kit {
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 40px;
    padding-top: 10px;
  }
  .table-row {
    flex-direction: row;
    gap: 20px;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    padding-right: 10px;
    padding-left: 10px;
    width: calc(100% - 40px);

    span {
      &:nth-child(1) {
        width: calc(100% - 240px);
        min-width: 80px;
        text-align: left;
      }
      &:nth-child(2) {
        width: 100px;

        text-align: center;
      }
      &:nth-child(3) {
        width: 120px;
        text-align: center;
      }
    }
  }
}
</style>
