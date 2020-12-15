//Node 14.15.1 LTS
//Sequelize

const FORCE_DATABASE_UPDATE = true;
const DB_TABLE_SEED = true;

//yarn add sqlite3
//yarn add sequelize
const { Sequelize } = require('sequelize');
const seq = new Sequelize('nodejs/data/sqdb', '', '', {
    host: 'localhost',
    storage: 'db.sqlite',
    dialect: 'sqlite',
});


let LevelTable = seq.define(DB_TABLE_SEED + 'Level', {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    Name: {
        type: Sequelize.STRING,
    },
});

let CourseTable = seq.define(DB_TABLE_SEED + 'Course', {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    LevelID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

let LessonTable = seq.define(DB_TABLE_SEED + 'Lesson', {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    CourseID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

//-----------CONSTRAINTS--------------
LevelTable.hasMany(CourseTable, {
    foreignKey: 'LevelID'
});

CourseTable.belongsTo(LevelTable, {
    foreignKey: 'LevelID'
});

//-----------CONSTRAINTS--------------
CourseTable.hasMany(LessonTable, {
    foreignKey: 'LevelID'
});

LessonTable.belongsTo(CourseTable, {
    foreignKey: 'LevelID'
});

let run = async () => {
    await LevelTable.sync({ force: FORCE_DATABASE_UPDATE });
    await CourseTable.sync({ force: FORCE_DATABASE_UPDATE });
    await LessonTable.sync({ force: FORCE_DATABASE_UPDATE });

    await LevelTable.create({ ID: 1, Name: "Level A" });
    await LevelTable.create({ ID: 2, Name: "Level B" });
    await LevelTable.create({ ID: 3, Name: "Level C" });

    await CourseTable.create({ ID: 1, Name: "Cource AA", LevelID: 1 });
    await CourseTable.create({ ID: 2, Name: "Cource AB", LevelID: 1 });
    await CourseTable.create({ ID: 3, Name: "Cource BA", LevelID: 2 });
    await CourseTable.create({ ID: 4, Name: "Cource BB", LevelID: 2 });
    await CourseTable.create({ ID: 5, Name: "Cource CA", LevelID: 3 });

    await LessonTable.create({ ID: 1, Name: "Lesson AA_1", CourseID: 1 });
    await LessonTable.create({ ID: 2, Name: "Lesson AA_2", CourseID: 1 });
    await LessonTable.create({ ID: 3, Name: "Lesson AB_1", CourseID: 2 });
    await LessonTable.create({ ID: 4, Name: "Lesson AB_2", CourseID: 2 });
    await LessonTable.create({ ID: 5, Name: "Lesson BA_1", CourseID: 3 });
    await LessonTable.create({ ID: 5, Name: "Lesson BA_2", CourseID: 3 });
    await LessonTable.create({ ID: 5, Name: "Lesson BB_1", CourseID: 4 });
    await LessonTable.create({ ID: 5, Name: "Lesson CA_1", CourseID: 5 });
    await LessonTable.create({ ID: 5, Name: "Lesson CA_2", CourseID: 5 });
}

run();