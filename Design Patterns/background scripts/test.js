var m = new Model();
m.setValue("myVal", "some data");
m.setValue("students", [new SubModel(), new SubModel()]);
gs.info(m.toJson());

message.setBody(m.toJson());