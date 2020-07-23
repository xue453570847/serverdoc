(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{184:function(t,a,v){"use strict";v.r(a);var _=v(6),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"关系数据库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关系数据库"}},[t._v("#")]),t._v(" 关系数据库")]),t._v(" "),v("h2",{attrs:{id:"关系数据库概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关系数据库概述"}},[t._v("#")]),t._v(" 关系数据库概述")]),t._v(" "),v("blockquote",[v("p",[t._v("系统而严格的提出关系模型的是美国IBM公司的E.F.Codd")])]),t._v(" "),v("ol",[v("li",[t._v("1970年提出关系数据模型")]),t._v(" "),v("li",[t._v('E.F.Codd在美国计算机学会会刊《Communications of the ACM》发表了题为"A Relational Model of Data for shared Data Banks"')]),t._v(" "),v("li",[t._v("之后，提出了关系代数和关系演算的概念")]),t._v(" "),v("li",[t._v("1972年提出了关系的第一、第二、第三范式")]),t._v(" "),v("li",[t._v("1974年提出了关系的BC范式")])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"关系数据模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关系数据模型"}},[t._v("#")]),t._v(" 关系数据模型")]),t._v(" "),v("h4",{attrs:{id:"关系数据结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关系数据结构"}},[t._v("#")]),t._v(" 关系数据结构")]),t._v(" "),v("ol",[v("li",[t._v("表(Table)")])]),t._v(" "),v("blockquote",[v("p",[t._v("也称为关系，是一个二维的数据结构。它由表名、构成表的各个列、及若干行数据组成")])]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("关系(Relation)")])]),t._v(" "),v("blockquote",[v("p",[t._v("一个关系逻辑上对应一张二维表，可以为每个关系取一个名称进行标识")])]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[t._v("列(Column)")])]),t._v(" "),v("blockquote",[v("p",[t._v("字段(Field)或属性(Attribute)")])]),t._v(" "),v("ol",{attrs:{start:"4"}},[v("li",[t._v("属性(Attribute)")])]),t._v(" "),v("blockquote",[v("p",[t._v("表中的一列即为一个属性，表中属性的个数称为关系的元或度")])]),t._v(" "),v("ol",{attrs:{start:"5"}},[v("li",[t._v("行(Row)")])]),t._v(" "),v("blockquote",[v("p",[t._v("也称做元组(Tuple)或记录(Record)")])]),t._v(" "),v("ol",{attrs:{start:"6"}},[v("li",[t._v("元组(Tuple)")])]),t._v(" "),v("blockquote",[v("p",[t._v("表中的一行")])]),t._v(" "),v("ol",{attrs:{start:"7"}},[v("li",[t._v("分量(Component)")])]),t._v(" "),v("blockquote",[v("p",[t._v("元组中的一个属性值")])]),t._v(" "),v("ol",{attrs:{start:"8"}},[v("li",[t._v("码或键(Key)")]),t._v(" "),v("li",[t._v("超码或超键(Super Key)")])]),t._v(" "),v("blockquote",[v("p",[t._v("关系的一个码移去某个属性，它仍然是这个关系的码")])]),t._v(" "),v("ol",{attrs:{start:"10"}},[v("li",[t._v("候选码或候选键(Candidate Key)")])]),t._v(" "),v("blockquote",[v("p",[t._v("关系的一个码或键中，不能从中移去任意一个属性")])]),t._v(" "),v("ol",{attrs:{start:"11"}},[v("li",[t._v("主码或主键(Primary Key)")])]),t._v(" "),v("blockquote",[v("p",[t._v("在一个关系的若干候选码或候选键中制定一个用来唯一标识关系的元组")])]),t._v(" "),v("ol",{attrs:{start:"12"}},[v("li",[t._v("全码或全键(All-Key)")])]),t._v(" "),v("blockquote",[v("p",[t._v("一个关系模式中所有属性集合是这个关系的主码或主键")])]),t._v(" "),v("ol",{attrs:{start:"13"}},[v("li",[t._v("主属性(Primary Atribute)和非主属性(NonPrimary Attribute)")])]),t._v(" "),v("blockquote",[v("p",[t._v("关系中包含再任意一个候选码的属性称为主属性或码属性，不包含反之")])]),t._v(" "),v("ol",{attrs:{start:"14"}},[v("li",[t._v("外码或外键(Foreign Key)")])]),t._v(" "),v("blockquote",[v("p",[t._v("当关系中的某个属性不是这个关系的主码或候选码，而是另一个关系的主码")])]),t._v(" "),v("ol",{attrs:{start:"15"}},[v("li",[t._v("参照关系(Referencing Relation)和被参照关系(Referenced Relation)")])]),t._v(" "),v("blockquote",[v("p",[t._v("参照关系也称为从关系，被参照关系也称为主关系，它们是指以外码相关联的二个关系，以外码作为主码的关系称为被参照关系，外码所在的关系称为参照关系")])]),t._v(" "),v("ol",{attrs:{start:"16"}},[v("li",[t._v("域(Domain)")])]),t._v(" "),v("blockquote",[v("p",[t._v("取值范围")])]),t._v(" "),v("ol",{attrs:{start:"17"}},[v("li",[t._v("数据类型(Data Type)")]),t._v(" "),v("li",[t._v("关系模式(Relation Schema)")])]),t._v(" "),v("blockquote",[v("p",[t._v("在关系数据库中，关系模式是型，关系是值")])]),t._v(" "),v("ol",{attrs:{start:"19"}},[v("li",[t._v("关系数据库(Relation Database)")])]),t._v(" "),v("blockquote",[v("p",[t._v("关系数据库是以关系模型作为数据的逻辑模型，并采用关系作为数据组织方式的一类数据库，其数据库操作建立在关系代数的基础上，在一个给定的应用领域中，所有关系的集合构成一个关系数据库")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("- 每一个属性都是不可分解的\n\n- 每一个关系仅仅有一个关系模式\n\n- 每一个关系模式中的属性必须命名\n\n- 同一个关系中不允许出现候选码或候选键值完全相同的元组\n\n- 在关系中元组的顺序可以任意交换\n\n- 在关系中属性的顺序可以任意交换\n")])])]),v("h4",{attrs:{id:"关系操作集合"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关系操作集合"}},[t._v("#")]),t._v(" 关系操作集合")]),t._v(" "),v("ol",[v("li",[t._v("基本的关系操作")])]),t._v(" "),v("blockquote",[v("p",[t._v("查询(Query)、插入(Insert)、删除(Delete)、修改(Update)")])]),t._v(" "),v("blockquote",[v("p",[t._v("查询操作又可以分为选择、投影、连接、除、并、差、交、笛卡尔积等，关系操作的特点是集合的操作方式，即操作的对象和结果都是集合")])]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("关系数据语言的分类")])]),t._v(" "),v("blockquote",[v("p",[t._v("代数方式和逻辑方式，代数方式主要有关系代数。它是通过对关系的操作来表达查询要求的方式；逻辑方式主要有关系演算、它是用谓词来表达查询要求的方式")])]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[t._v("关系代数")])]),t._v(" "),v("blockquote"),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("- 传统的集合运算\n\n    - 并(UNION)\n    - 差(DIFFERENCE)\n    - 交(INTERSECTION)\n    - 笛卡尔积(CARTESIAN PRODUCT)\n    \n- 专门的关系运算\n    \n    - 选择(SELECT)\n        > 行变\n    - 投影(PROJECTION)\n        > 列变\n    - 连接(JOIN)\n    - 除(DICISION)\n")])])]),v("h4",{attrs:{id:"关系的完整性约束"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关系的完整性约束"}},[t._v("#")]),t._v(" 关系的完整性约束")]),t._v(" "),v("ol",[v("li",[t._v("实体完整性约束(Entity Intergrity Constraint)")])]),t._v(" "),v("blockquote",[v("p",[t._v("实体完整性约束是指关系的主属性，即主码的组成不能为空，也就是关系的主属性不能是空值NULL.")])]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("参照完整性约束(Referential Intergrity Constraint)")]),t._v(" "),v("li",[t._v("用户定义完整性约束(User-defined Integrity Constraint)")])]),t._v(" "),v("blockquote",[v("p",[t._v("用户定义的完整性约束是针对某一应用环境的完整性约束条件，它反映了某一具体应用所涉及的数据应满足的条件")])]),t._v(" "),v("ol",{attrs:{start:"4"}},[v("li",[t._v("关系数据完整性约束的检验")])]),t._v(" "),v("blockquote",[v("p",[t._v("对数据执行插入、删除、和更新操作")])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"关系数据库的规范化理论"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关系数据库的规范化理论"}},[t._v("#")]),t._v(" 关系数据库的规范化理论")]),t._v(" "),v("h4",{attrs:{id:"关系模式中可能存在的冗余和异常问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关系模式中可能存在的冗余和异常问题"}},[t._v("#")]),t._v(" 关系模式中可能存在的冗余和异常问题")]),t._v(" "),v("ol",[v("li",[t._v("数据冗余")]),t._v(" "),v("li",[t._v("更新异常")]),t._v(" "),v("li",[t._v("插入异常")]),t._v(" "),v("li",[t._v("删除异常")])]),t._v(" "),v("h4",{attrs:{id:"函数依赖与关键字"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#函数依赖与关键字"}},[t._v("#")]),t._v(" 函数依赖与关键字")]),t._v(" "),v("blockquote",[v("p",[t._v("如果对于R中属性X的每一个值，R中的属性Y只有唯一的值与之对应，则称为X函数决定Y或称为Y函数依赖与X,记做X->Y")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("举个小例子\n\n身份证号->性别\n身份证号->姓名\n身份证号->年龄\n")])])]),v("ol",[v("li",[t._v("完全函数依赖")])]),t._v(" "),v("blockquote",[v("p",[t._v("设R为任意给定关系，X、Y为其属性集，若X->Y，且对与X的任意真子集都有X不能决定Y，则称为Y完全依赖X")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("\nsno, cno, cname, age （学号、课程号、课程名字，成绩）\n\n(sno,cno)->age 为完全依赖\n\n其中sno、cno单独拿出来，不能决定age\n\n")])])]),v("ol",{attrs:{start:"2"}},[v("li",[t._v("部分函数依赖")]),t._v(" "),v("li",[t._v("传递函数依赖")])]),t._v(" "),v("blockquote",[v("p",[t._v("X->Y,Y不决定X,Y->Z,则X->Z,称为Z传递函数依赖于X")])]),t._v(" "),v("h4",{attrs:{id:"范式与关系规范化过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#范式与关系规范化过程"}},[t._v("#")]),t._v(" 范式与关系规范化过程")]),t._v(" "),v("blockquote",[v("p",[t._v("满足最低要求的称为第一范式，INF，这是最基本的范式")])]),t._v(" "),v("ol",[v("li",[t._v("第一范式")])]),t._v(" "),v("blockquote",[v("p",[t._v("不可再分")])]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("第二范式")])]),t._v(" "),v("blockquote",[v("p",[t._v("所有非主属性都完全函数依赖与候选关键字")])]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[t._v("第三范式")])]),t._v(" "),v("blockquote",[v("p",[t._v("每一个非主属性都不传递函数依赖与候选关键字")])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"关系规范化理论的应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关系规范化理论的应用"}},[t._v("#")]),t._v(" 关系规范化理论的应用")]),t._v(" "),v("blockquote",[v("p",[t._v("关系规范化理论主要应用于数据库设计中的概念设计阶段")])])])}),[],!1,null,null,null);a.default=e.exports}}]);