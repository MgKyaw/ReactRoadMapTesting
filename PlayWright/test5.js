export const test = base.extend({

  sharedDatabase: [async ({}, use) => {

    const db = await Database.connect();

    await use(db);

    await db.disconnect();

  }, { scope: 'worker' }],

});