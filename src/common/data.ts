export default {
    "height": '100%',
    "responsive": true,
    "striped": true,
    "checkOnClickRow": true,
    "plugins": [
        "col-hover",
        "rich",
        "sort-type",
        "checkable",
        "nested",
        "rich"
    ],
    "colHover": "header",
    "bordered": true,
    "cols": [
        {
            "name": "id",
            "title": "ID",
            "width": 70,
            "fixed": "left",
            "checkbox": true,
            "sortType": "down"
        },
        {
            "name": "project",
            "title": "项目名称",
            "width": 200,
            "flex": 1,
            "type": "link",
            "sortType": false,
            "nestedToggle": true
        },
        {
            "name": "manager",
            "title": "负责人",
            "width": 90,
            "sortType": true,
            "flex": 1,
            "type": "avatar",
            "avatarKey": "managerAvatar",
            "avatarWithName": true,
            "avatarClass": "size-xs circle"
        },
        {
            "name": "progress",
            "title": "进度",
            "width": 65,
            "align": "center",
            "sortType": false,
            "type": "circleProgress"
        },
        {
            "name": "storyPoints",
            "title": "需求规模",
            "width": 80,
            "align": "right",
            "sortType": false,
            // "type": "format",
            "format": {
                "type": "html"
            }
        },
        {
            "name": "executionCounts",
            "title": "执行数",
            "width": 70,
            "align": "right",
            "sortType": true,
            "type": "format",
            "format": {
                "type": "html",
                "format": "{0} <small class=\"text-dark\">迭代</small>"
            }
        },
        {
            "name": "investedDays",
            "title": "已投入",
            "width": 70,
            "align": "right",
            "sortType": false,
            "type": "format",
            "format": {
                "type": "html",
                "format": "{0} <small class=\"text-dark\">人天</small>"
            }
        },
        {
            "name": "startDate",
            "title": "开始日期",
            "width": 120,
            "align": "center",
            "sortType": true,
            "type": "format",
            "format": {
                "type": "datetime",
                "format": "yyyy年MM月dd日"
            }
        },
        {
            "name": "finishDate",
            "title": "完成日期",
            "width": 120,
            "align": "center",
            "sortType": true,
            "type": "format",
            "format": {
                "type": "datetime",
                "format": "yyyy年MM月dd日"
            }
        },
        {
            "name": "actions",
            "title": "操作",
            "width": 100,
            "sortType": false,
            "fixed": "right",
            "onRenderCell": null,
            "type": "actionButtons",
            "actionBtnData": {
                "start": {
                    "title": "开始",
                    "icon": "play"
                },
                "close": {
                    "title": "关闭",
                    "icon": "off"
                },
                "edit": {
                    "title": "编辑",
                    "icon": "pencil"
                }
            },
            "style": {
                "justifyContent": "center"
            }
        }
    ],
    "data": [
        {
            "id": "1",
            "project": "禅道开源版",
            "manager": "魏小娟",
            "managerAvatar": "../../avatar/avatar-9.png",
            "storyPoints": 131,
            "executionCounts": 27,
            "investedDays": 29,
            "startDate": "2023/1/19",
            "finishDate": "2023/5/18",
            "progress": 50,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "2",
            "project": "禅道企业版",
            "manager": "刘大辉",
            "managerAvatar": "../../avatar/avatar-5.png",
            "storyPoints": 936,
            "executionCounts": 2,
            "investedDays": 54,
            "startDate": "2023/1/10",
            "finishDate": "2023/5/6",
            "progress": 91,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "3",
            "project": "禅道旗舰版",
            "manager": "金星",
            "managerAvatar": "../../avatar/avatar-8.png",
            "storyPoints": 343,
            "executionCounts": 42,
            "investedDays": 22,
            "startDate": "2023/1/9",
            "finishDate": "2023/4/6",
            "progress": 2,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "2"
        },
        {
            "id": "4",
            "project": "禅道移动端",
            "manager": "丁玉涛",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 42,
            "executionCounts": 28,
            "investedDays": 6,
            "startDate": "2023/1/23",
            "finishDate": "2023/4/22",
            "progress": 4,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "2"
        },
        {
            "id": "5",
            "project": "禅道自动化测试社区",
            "manager": "李兰",
            "managerAvatar": "../../avatar/avatar-7.png",
            "storyPoints": 881,
            "executionCounts": 21,
            "investedDays": 42,
            "startDate": "2022/12/12",
            "finishDate": "2023/4/7",
            "progress": 94,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "2"
        },
        {
            "id": "6",
            "project": "ZUI3",
            "manager": "李兰",
            "managerAvatar": "../../avatar/avatar-7.png",
            "storyPoints": 171,
            "executionCounts": 36,
            "investedDays": 9,
            "startDate": "2023/1/31",
            "finishDate": "2023/5/26",
            "progress": 75,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "3"
        },
        {
            "id": "7",
            "project": "ZenDAS",
            "manager": "李强",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 814,
            "executionCounts": 21,
            "investedDays": 12,
            "startDate": "2023/3/15",
            "finishDate": "2023/4/12",
            "progress": 99,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "3"
        },
        {
            "id": "8",
            "project": "渠成云原生应用交付平台",
            "manager": "刘大辉",
            "managerAvatar": "../../avatar/avatar-5.png",
            "storyPoints": 401,
            "executionCounts": 38,
            "investedDays": 50,
            "startDate": "2023/1/11",
            "finishDate": "2023/4/21",
            "progress": 90,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "9",
            "project": "ZTF",
            "manager": "张天明",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 343,
            "executionCounts": 8,
            "investedDays": 19,
            "startDate": "2023/3/3",
            "finishDate": "2023/4/29",
            "progress": 71,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "10",
            "project": "ZenData",
            "manager": "刘大辉",
            "managerAvatar": "../../avatar/avatar-5.png",
            "storyPoints": 149,
            "executionCounts": 23,
            "investedDays": 44,
            "startDate": "2023/2/6",
            "finishDate": "2023/5/2",
            "progress": 56,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "11",
            "project": "ZentaoPHP",
            "manager": "魏小娟",
            "managerAvatar": "../../avatar/avatar-9.png",
            "storyPoints": 366,
            "executionCounts": 48,
            "investedDays": 6,
            "startDate": "2022/12/28",
            "finishDate": "2023/4/5",
            "progress": 90,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "12",
            "project": "喧喧",
            "manager": "刘大辉",
            "managerAvatar": "../../avatar/avatar-5.png",
            "storyPoints": 645,
            "executionCounts": 27,
            "investedDays": 56,
            "startDate": "2023/1/23",
            "finishDate": "2023/6/7",
            "progress": 87,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "13",
            "project": "ZSite",
            "manager": "李兰",
            "managerAvatar": "../../avatar/avatar-7.png",
            "storyPoints": 677,
            "executionCounts": 4,
            "investedDays": 30,
            "startDate": "2023/2/15",
            "finishDate": "2023/5/1",
            "progress": 52,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "12"
        },
        {
            "id": "14",
            "project": "ZDOO",
            "manager": "李兰",
            "managerAvatar": "../../avatar/avatar-7.png",
            "storyPoints": 3,
            "executionCounts": 40,
            "investedDays": 17,
            "startDate": "2023/1/16",
            "finishDate": "2023/5/7",
            "progress": 80,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "12"
        },
        {
            "id": "15",
            "project": "ZenTools",
            "manager": "丁玉涛",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 65,
            "executionCounts": 8,
            "investedDays": 59,
            "startDate": "2023/3/7",
            "finishDate": "2023/4/18",
            "progress": 88,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "12"
        },
        {
            "id": "16",
            "project": "ZenShot",
            "manager": "李兰",
            "managerAvatar": "../../avatar/avatar-7.png",
            "storyPoints": 710,
            "executionCounts": 8,
            "investedDays": 6,
            "startDate": "2022/12/12",
            "finishDate": "2023/5/21",
            "progress": 56,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "13"
        },
        {
            "id": "17",
            "project": "ZenPanel",
            "manager": "李强",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 663,
            "executionCounts": 4,
            "investedDays": 32,
            "startDate": "2022/12/16",
            "finishDate": "2023/5/2",
            "progress": 93,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "13"
        },
        {
            "id": "18",
            "project": "ZBox",
            "manager": "王萌",
            "managerAvatar": "../../avatar/avatar-4.png",
            "storyPoints": 117,
            "executionCounts": 27,
            "investedDays": 15,
            "startDate": "2023/2/12",
            "finishDate": "2023/6/16",
            "progress": 45,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "19",
            "project": "MZUI",
            "manager": "张天明",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 588,
            "executionCounts": 41,
            "investedDays": 44,
            "startDate": "2023/1/11",
            "finishDate": "2023/6/2",
            "progress": 24,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "20",
            "project": "禅道开源版1",
            "manager": "丁玉涛",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 813,
            "executionCounts": 15,
            "investedDays": 25,
            "startDate": "2023/3/11",
            "finishDate": "2023/5/19",
            "progress": 0,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "21",
            "project": "禅道企业版1",
            "manager": "张天明",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 634,
            "executionCounts": 35,
            "investedDays": 27,
            "startDate": "2023/1/22",
            "finishDate": "2023/4/27",
            "progress": 40,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "22",
            "project": "禅道旗舰版1",
            "manager": "李兰",
            "managerAvatar": "../../avatar/avatar-7.png",
            "storyPoints": 528,
            "executionCounts": 47,
            "investedDays": 29,
            "startDate": "2023/2/19",
            "finishDate": "2023/6/14",
            "progress": 62,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "23",
            "project": "禅道移动端1",
            "manager": "孙小微",
            "managerAvatar": "../../avatar/avatar-3.png",
            "storyPoints": 728,
            "executionCounts": 42,
            "investedDays": 27,
            "startDate": "2023/3/14",
            "finishDate": "2023/3/25",
            "progress": 7,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "22"
        },
        {
            "id": "24",
            "project": "禅道自动化测试社区1",
            "manager": "王萌",
            "managerAvatar": "../../avatar/avatar-4.png",
            "storyPoints": 885,
            "executionCounts": 21,
            "investedDays": 14,
            "startDate": "2023/2/16",
            "finishDate": "2023/6/20",
            "progress": 96,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "22"
        },
        {
            "id": "25",
            "project": "ZUI31",
            "manager": "魏小娟",
            "managerAvatar": "../../avatar/avatar-9.png",
            "storyPoints": 979,
            "executionCounts": 6,
            "investedDays": 29,
            "startDate": "2023/2/7",
            "finishDate": "2023/4/1",
            "progress": 7,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "22"
        },
        {
            "id": "26",
            "project": "ZenDAS1",
            "manager": "丁玉涛",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 126,
            "executionCounts": 12,
            "investedDays": 57,
            "startDate": "2023/2/27",
            "finishDate": "2023/4/21",
            "progress": 24,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "23"
        },
        {
            "id": "27",
            "project": "渠成云原生应用交付平台1",
            "manager": "金星",
            "managerAvatar": "../../avatar/avatar-8.png",
            "storyPoints": 715,
            "executionCounts": 36,
            "investedDays": 15,
            "startDate": "2022/12/10",
            "finishDate": "2023/4/23",
            "progress": 39,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "23"
        },
        {
            "id": "28",
            "project": "ZTF1",
            "manager": "王萌",
            "managerAvatar": "../../avatar/avatar-4.png",
            "storyPoints": 736,
            "executionCounts": 47,
            "investedDays": 10,
            "startDate": "2023/2/3",
            "finishDate": "2023/3/22",
            "progress": 31,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "29",
            "project": "ZenData1",
            "manager": "金星",
            "managerAvatar": "../../avatar/avatar-8.png",
            "storyPoints": 139,
            "executionCounts": 47,
            "investedDays": 9,
            "startDate": "2023/1/28",
            "finishDate": "2023/4/23",
            "progress": 81,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "30",
            "project": "ZentaoPHP1",
            "manager": "周红",
            "managerAvatar": "../../avatar/avatar-6.png",
            "storyPoints": 920,
            "executionCounts": 49,
            "investedDays": 58,
            "startDate": "2023/2/1",
            "finishDate": "2023/4/1",
            "progress": 19,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "31",
            "project": "喧喧1",
            "manager": "张天明",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 101,
            "executionCounts": 9,
            "investedDays": 39,
            "startDate": "2023/1/15",
            "finishDate": "2023/3/20",
            "progress": 44,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "32",
            "project": "ZSite1",
            "manager": "孙小微",
            "managerAvatar": "../../avatar/avatar-3.png",
            "storyPoints": 876,
            "executionCounts": 45,
            "investedDays": 7,
            "startDate": "2023/2/10",
            "finishDate": "2023/5/15",
            "progress": 48,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "33",
            "project": "ZDOO1",
            "manager": "张天明",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 297,
            "executionCounts": 5,
            "investedDays": 25,
            "startDate": "2023/1/16",
            "finishDate": "2023/6/8",
            "progress": 67,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "32"
        },
        {
            "id": "34",
            "project": "ZenTools1",
            "manager": "孙小微",
            "managerAvatar": "../../avatar/avatar-3.png",
            "storyPoints": 292,
            "executionCounts": 48,
            "investedDays": 39,
            "startDate": "2023/2/25",
            "finishDate": "2023/4/8",
            "progress": 71,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "32"
        },
        {
            "id": "35",
            "project": "ZenShot1",
            "manager": "丁玉涛",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 154,
            "executionCounts": 0,
            "investedDays": 18,
            "startDate": "2023/1/18",
            "finishDate": "2023/4/17",
            "progress": 47,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "32"
        },
        {
            "id": "36",
            "project": "ZenPanel1",
            "manager": "张天明",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 916,
            "executionCounts": 7,
            "investedDays": 27,
            "startDate": "2023/2/13",
            "finishDate": "2023/5/13",
            "progress": 0,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "33"
        },
        {
            "id": "37",
            "project": "ZBox1",
            "manager": "李兰",
            "managerAvatar": "../../avatar/avatar-7.png",
            "storyPoints": 99,
            "executionCounts": 3,
            "investedDays": 41,
            "startDate": "2023/2/9",
            "finishDate": "2023/6/12",
            "progress": 83,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "33"
        },
        {
            "id": "38",
            "project": "MZUI1",
            "manager": "魏小娟",
            "managerAvatar": "../../avatar/avatar-9.png",
            "storyPoints": 551,
            "executionCounts": 1,
            "investedDays": 34,
            "startDate": "2022/12/12",
            "finishDate": "2023/5/11",
            "progress": 84,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "39",
            "project": "禅道开源版2",
            "manager": "李强",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 99,
            "executionCounts": 1,
            "investedDays": 51,
            "startDate": "2022/12/20",
            "finishDate": "2023/4/23",
            "progress": 90,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "40",
            "project": "禅道企业版2",
            "manager": "丁玉涛",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 261,
            "executionCounts": 40,
            "investedDays": 44,
            "startDate": "2023/1/5",
            "finishDate": "2023/6/4",
            "progress": 38,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "41",
            "project": "禅道旗舰版2",
            "manager": "孙小微",
            "managerAvatar": "../../avatar/avatar-3.png",
            "storyPoints": 721,
            "executionCounts": 47,
            "investedDays": 2,
            "startDate": "2023/2/7",
            "finishDate": "2023/6/21",
            "progress": 17,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "42",
            "project": "禅道移动端2",
            "manager": "李强",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 943,
            "executionCounts": 42,
            "investedDays": 43,
            "startDate": "2023/1/17",
            "finishDate": "2023/5/22",
            "progress": 11,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "43",
            "project": "禅道自动化测试社区2",
            "manager": "丁玉涛",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 669,
            "executionCounts": 6,
            "investedDays": 46,
            "startDate": "2023/2/25",
            "finishDate": "2023/4/8",
            "progress": 35,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "42"
        },
        {
            "id": "44",
            "project": "ZUI32",
            "manager": "张天明",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 228,
            "executionCounts": 43,
            "investedDays": 18,
            "startDate": "2023/3/12",
            "finishDate": "2023/4/16",
            "progress": 99,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "42"
        },
        {
            "id": "45",
            "project": "ZenDAS2",
            "manager": "马广春",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 885,
            "executionCounts": 43,
            "investedDays": 56,
            "startDate": "2023/2/5",
            "finishDate": "2023/4/8",
            "progress": 37,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "42"
        },
        {
            "id": "46",
            "project": "渠成云原生应用交付平台2",
            "manager": "李兰",
            "managerAvatar": "../../avatar/avatar-7.png",
            "storyPoints": 282,
            "executionCounts": 41,
            "investedDays": 31,
            "startDate": "2023/3/8",
            "finishDate": "2023/4/15",
            "progress": 5,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "43"
        },
        {
            "id": "47",
            "project": "ZTF2",
            "manager": "李强",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 504,
            "executionCounts": 5,
            "investedDays": 0,
            "startDate": "2023/2/14",
            "finishDate": "2023/4/27",
            "progress": 36,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "43"
        },
        {
            "id": "48",
            "project": "ZenData2",
            "manager": "周红",
            "managerAvatar": "../../avatar/avatar-6.png",
            "storyPoints": 87,
            "executionCounts": 42,
            "investedDays": 48,
            "startDate": "2022/12/25",
            "finishDate": "2023/3/25",
            "progress": 87,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "49",
            "project": "ZentaoPHP2",
            "manager": "刘大辉",
            "managerAvatar": "../../avatar/avatar-5.png",
            "storyPoints": 307,
            "executionCounts": 36,
            "investedDays": 4,
            "startDate": "2023/3/4",
            "finishDate": "2023/4/3",
            "progress": 33,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "50",
            "project": "喧喧2",
            "manager": "孙小微",
            "managerAvatar": "../../avatar/avatar-3.png",
            "storyPoints": 1,
            "executionCounts": 40,
            "investedDays": 40,
            "startDate": "2023/1/10",
            "finishDate": "2023/6/15",
            "progress": 48,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "51",
            "project": "ZSite2",
            "manager": "李强",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 952,
            "executionCounts": 42,
            "investedDays": 55,
            "startDate": "2023/2/10",
            "finishDate": "2023/4/11",
            "progress": 51,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "52",
            "project": "ZDOO2",
            "manager": "丁玉涛",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 514,
            "executionCounts": 23,
            "investedDays": 46,
            "startDate": "2023/1/5",
            "finishDate": "2023/4/10",
            "progress": 60,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "53",
            "project": "ZenTools2",
            "manager": "李强",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 139,
            "executionCounts": 43,
            "investedDays": 38,
            "startDate": "2023/1/16",
            "finishDate": "2023/6/20",
            "progress": 71,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "52"
        },
        {
            "id": "54",
            "project": "ZenShot2",
            "manager": "魏小娟",
            "managerAvatar": "../../avatar/avatar-9.png",
            "storyPoints": 527,
            "executionCounts": 28,
            "investedDays": 38,
            "startDate": "2022/12/26",
            "finishDate": "2023/4/24",
            "progress": 50,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "52"
        },
        {
            "id": "55",
            "project": "ZenPanel2",
            "manager": "李强",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 947,
            "executionCounts": 22,
            "investedDays": 51,
            "startDate": "2023/1/8",
            "finishDate": "2023/4/20",
            "progress": 34,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "52"
        },
        {
            "id": "56",
            "project": "ZBox2",
            "manager": "李强",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 62,
            "executionCounts": 27,
            "investedDays": 38,
            "startDate": "2023/1/30",
            "finishDate": "2023/5/9",
            "progress": 21,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "53"
        },
        {
            "id": "57",
            "project": "MZUI2",
            "manager": "王萌",
            "managerAvatar": "../../avatar/avatar-4.png",
            "storyPoints": 8,
            "executionCounts": 10,
            "investedDays": 47,
            "startDate": "2023/1/12",
            "finishDate": "2023/6/15",
            "progress": 30,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "53"
        },
        {
            "id": "58",
            "project": "禅道开源版3",
            "manager": "张天明",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 837,
            "executionCounts": 28,
            "investedDays": 24,
            "startDate": "2023/3/8",
            "finishDate": "2023/3/21",
            "progress": 34,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "59",
            "project": "禅道企业版3",
            "manager": "马广春",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 871,
            "executionCounts": 33,
            "investedDays": 50,
            "startDate": "2023/2/3",
            "finishDate": "2023/5/5",
            "progress": 53,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "60",
            "project": "禅道旗舰版3",
            "manager": "王萌",
            "managerAvatar": "../../avatar/avatar-4.png",
            "storyPoints": 210,
            "executionCounts": 39,
            "investedDays": 37,
            "startDate": "2022/12/9",
            "finishDate": "2023/5/21",
            "progress": 19,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "61",
            "project": "禅道移动端3",
            "manager": "马广春",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 710,
            "executionCounts": 31,
            "investedDays": 7,
            "startDate": "2023/3/7",
            "finishDate": "2023/5/10",
            "progress": 72,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "62",
            "project": "禅道自动化测试社区3",
            "manager": "丁玉涛",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 920,
            "executionCounts": 17,
            "investedDays": 50,
            "startDate": "2023/3/4",
            "finishDate": "2023/3/19",
            "progress": 19,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "63",
            "project": "ZUI33",
            "manager": "孙小微",
            "managerAvatar": "../../avatar/avatar-3.png",
            "storyPoints": 947,
            "executionCounts": 41,
            "investedDays": 51,
            "startDate": "2023/1/21",
            "finishDate": "2023/3/18",
            "progress": 97,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "62"
        },
        {
            "id": "64",
            "project": "ZenDAS3",
            "manager": "魏小娟",
            "managerAvatar": "../../avatar/avatar-9.png",
            "storyPoints": 917,
            "executionCounts": 19,
            "investedDays": 56,
            "startDate": "2023/2/1",
            "finishDate": "2023/5/14",
            "progress": 24,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "62"
        },
        {
            "id": "65",
            "project": "渠成云原生应用交付平台3",
            "manager": "刘大辉",
            "managerAvatar": "../../avatar/avatar-5.png",
            "storyPoints": 554,
            "executionCounts": 29,
            "investedDays": 20,
            "startDate": "2023/2/28",
            "finishDate": "2023/3/20",
            "progress": 25,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "62"
        },
        {
            "id": "66",
            "project": "ZTF3",
            "manager": "魏小娟",
            "managerAvatar": "../../avatar/avatar-9.png",
            "storyPoints": 359,
            "executionCounts": 44,
            "investedDays": 58,
            "startDate": "2022/12/29",
            "finishDate": "2023/6/22",
            "progress": 43,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "63"
        },
        {
            "id": "67",
            "project": "ZenData3",
            "manager": "马广春",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 299,
            "executionCounts": 11,
            "investedDays": 41,
            "startDate": "2023/3/12",
            "finishDate": "2023/6/5",
            "progress": 47,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "63"
        },
        {
            "id": "68",
            "project": "ZentaoPHP3",
            "manager": "魏小娟",
            "managerAvatar": "../../avatar/avatar-9.png",
            "storyPoints": 922,
            "executionCounts": 44,
            "investedDays": 49,
            "startDate": "2023/3/15",
            "finishDate": "2023/5/27",
            "progress": 31,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "69",
            "project": "喧喧3",
            "manager": "马广春",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 868,
            "executionCounts": 42,
            "investedDays": 11,
            "startDate": "2022/12/20",
            "finishDate": "2023/6/3",
            "progress": 47,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "70",
            "project": "ZSite3",
            "manager": "李兰",
            "managerAvatar": "../../avatar/avatar-7.png",
            "storyPoints": 699,
            "executionCounts": 42,
            "investedDays": 34,
            "startDate": "2023/1/15",
            "finishDate": "2023/3/23",
            "progress": 66,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "71",
            "project": "ZDOO3",
            "manager": "丁玉涛",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 701,
            "executionCounts": 35,
            "investedDays": 54,
            "startDate": "2023/1/19",
            "finishDate": "2023/5/7",
            "progress": 76,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "72",
            "project": "ZenTools3",
            "manager": "张亮",
            "managerAvatar": "../../avatar/avatar-10.png",
            "storyPoints": 825,
            "executionCounts": 24,
            "investedDays": 18,
            "startDate": "2022/12/23",
            "finishDate": "2023/4/30",
            "progress": 35,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "73",
            "project": "ZenShot3",
            "manager": "魏小娟",
            "managerAvatar": "../../avatar/avatar-9.png",
            "storyPoints": 8,
            "executionCounts": 33,
            "investedDays": 5,
            "startDate": "2023/1/9",
            "finishDate": "2023/4/26",
            "progress": 16,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "72"
        },
        {
            "id": "74",
            "project": "ZenPanel3",
            "manager": "李强",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 459,
            "executionCounts": 38,
            "investedDays": 55,
            "startDate": "2023/1/27",
            "finishDate": "2023/6/12",
            "progress": 76,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "72"
        },
        {
            "id": "75",
            "project": "ZBox3",
            "manager": "金星",
            "managerAvatar": "../../avatar/avatar-8.png",
            "storyPoints": 58,
            "executionCounts": 34,
            "investedDays": 3,
            "startDate": "2023/3/11",
            "finishDate": "2023/3/30",
            "progress": 72,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "72"
        },
        {
            "id": "76",
            "project": "MZUI3",
            "manager": "王萌",
            "managerAvatar": "../../avatar/avatar-4.png",
            "storyPoints": 83,
            "executionCounts": 48,
            "investedDays": 59,
            "startDate": "2023/1/31",
            "finishDate": "2023/4/2",
            "progress": 3,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "73"
        },
        {
            "id": "77",
            "project": "禅道开源版4",
            "manager": "李强",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 442,
            "executionCounts": 19,
            "investedDays": 3,
            "startDate": "2023/3/1",
            "finishDate": "2023/6/25",
            "progress": 69,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "73"
        },
        {
            "id": "78",
            "project": "禅道企业版4",
            "manager": "张亮",
            "managerAvatar": "../../avatar/avatar-10.png",
            "storyPoints": 739,
            "executionCounts": 26,
            "investedDays": 38,
            "startDate": "2023/1/20",
            "finishDate": "2023/5/7",
            "progress": 53,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "79",
            "project": "禅道旗舰版4",
            "manager": "孙小微",
            "managerAvatar": "../../avatar/avatar-3.png",
            "storyPoints": 838,
            "executionCounts": 9,
            "investedDays": 4,
            "startDate": "2023/2/16",
            "finishDate": "2023/4/23",
            "progress": 19,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "80",
            "project": "禅道移动端4",
            "manager": "丁玉涛",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 271,
            "executionCounts": 21,
            "investedDays": 29,
            "startDate": "2023/2/24",
            "finishDate": "2023/6/7",
            "progress": 80,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "81",
            "project": "禅道自动化测试社区4",
            "manager": "王萌",
            "managerAvatar": "../../avatar/avatar-4.png",
            "storyPoints": 172,
            "executionCounts": 45,
            "investedDays": 42,
            "startDate": "2023/1/14",
            "finishDate": "2023/6/15",
            "progress": 15,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "82",
            "project": "ZUI34",
            "manager": "马广春",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 753,
            "executionCounts": 18,
            "investedDays": 42,
            "startDate": "2022/12/27",
            "finishDate": "2023/6/15",
            "progress": 51,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "83",
            "project": "ZenDAS4",
            "manager": "马广春",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 88,
            "executionCounts": 38,
            "investedDays": 38,
            "startDate": "2023/1/14",
            "finishDate": "2023/6/25",
            "progress": 86,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "82"
        },
        {
            "id": "84",
            "project": "渠成云原生应用交付平台4",
            "manager": "周红",
            "managerAvatar": "../../avatar/avatar-6.png",
            "storyPoints": 730,
            "executionCounts": 26,
            "investedDays": 51,
            "startDate": "2023/1/7",
            "finishDate": "2023/5/26",
            "progress": 25,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "82"
        },
        {
            "id": "85",
            "project": "ZTF4",
            "manager": "李强",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 946,
            "executionCounts": 31,
            "investedDays": 12,
            "startDate": "2023/1/29",
            "finishDate": "2023/5/11",
            "progress": 9,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "82"
        },
        {
            "id": "86",
            "project": "ZenData4",
            "manager": "王萌",
            "managerAvatar": "../../avatar/avatar-4.png",
            "storyPoints": 184,
            "executionCounts": 9,
            "investedDays": 13,
            "startDate": "2022/12/26",
            "finishDate": "2023/5/17",
            "progress": 1,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "83"
        },
        {
            "id": "87",
            "project": "ZentaoPHP4",
            "manager": "孙小微",
            "managerAvatar": "../../avatar/avatar-3.png",
            "storyPoints": 790,
            "executionCounts": 28,
            "investedDays": 14,
            "startDate": "2023/3/13",
            "finishDate": "2023/3/25",
            "progress": 10,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "83"
        },
        {
            "id": "88",
            "project": "喧喧4",
            "manager": "李强",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 264,
            "executionCounts": 20,
            "investedDays": 25,
            "startDate": "2022/12/15",
            "finishDate": "2023/4/25",
            "progress": 68,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "89",
            "project": "ZSite4",
            "manager": "马广春",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 756,
            "executionCounts": 47,
            "investedDays": 49,
            "startDate": "2023/2/16",
            "finishDate": "2023/5/12",
            "progress": 32,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "90",
            "project": "ZDOO4",
            "manager": "魏小娟",
            "managerAvatar": "../../avatar/avatar-9.png",
            "storyPoints": 956,
            "executionCounts": 49,
            "investedDays": 59,
            "startDate": "2023/2/4",
            "finishDate": "2023/3/20",
            "progress": 15,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "91",
            "project": "ZenTools4",
            "manager": "丁玉涛",
            "managerAvatar": "../../avatar/avatar-2.png",
            "storyPoints": 471,
            "executionCounts": 38,
            "investedDays": 17,
            "startDate": "2022/12/16",
            "finishDate": "2023/6/4",
            "progress": 99,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "92",
            "project": "ZenShot4",
            "manager": "周红",
            "managerAvatar": "../../avatar/avatar-6.png",
            "storyPoints": 86,
            "executionCounts": 2,
            "investedDays": 16,
            "startDate": "2023/2/15",
            "finishDate": "2023/5/23",
            "progress": 93,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "93",
            "project": "ZenPanel4",
            "manager": "张亮",
            "managerAvatar": "../../avatar/avatar-10.png",
            "storyPoints": 57,
            "executionCounts": 3,
            "investedDays": 3,
            "startDate": "2023/3/12",
            "finishDate": "2023/5/25",
            "progress": 90,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "92"
        },
        {
            "id": "94",
            "project": "ZBox4",
            "manager": "周红",
            "managerAvatar": "../../avatar/avatar-6.png",
            "storyPoints": 433,
            "executionCounts": 2,
            "investedDays": 59,
            "startDate": "2022/12/9",
            "finishDate": "2023/5/28",
            "progress": 55,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "92"
        },
        {
            "id": "95",
            "project": "MZUI4",
            "manager": "李强",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 613,
            "executionCounts": 49,
            "investedDays": 59,
            "startDate": "2023/1/19",
            "finishDate": "2023/5/17",
            "progress": 55,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "92"
        },
        {
            "id": "96",
            "project": "禅道开源版5",
            "manager": "孙小微",
            "managerAvatar": "../../avatar/avatar-3.png",
            "storyPoints": 221,
            "executionCounts": 36,
            "investedDays": 51,
            "startDate": "2022/12/22",
            "finishDate": "2023/5/9",
            "progress": 9,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "93"
        },
        {
            "id": "97",
            "project": "禅道企业版5",
            "manager": "孙小微",
            "managerAvatar": "../../avatar/avatar-3.png",
            "storyPoints": 874,
            "executionCounts": 34,
            "investedDays": 58,
            "startDate": "2022/12/30",
            "finishDate": "2023/6/23",
            "progress": 27,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": "93"
        },
        {
            "id": "98",
            "project": "禅道旗舰版5",
            "manager": "刘大辉",
            "managerAvatar": "../../avatar/avatar-5.png",
            "storyPoints": 593,
            "executionCounts": 6,
            "investedDays": 15,
            "startDate": "2023/1/27",
            "finishDate": "2023/6/3",
            "progress": 14,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "99",
            "project": "禅道移动端5",
            "manager": "马广春",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 109,
            "executionCounts": 48,
            "investedDays": 0,
            "startDate": "2023/1/27",
            "finishDate": "2023/6/25",
            "progress": 50,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        },
        {
            "id": "100",
            "project": "禅道自动化测试社区5",
            "manager": "马广春",
            "managerAvatar": "../../avatar/avatar-1.png",
            "storyPoints": 62,
            "executionCounts": 34,
            "investedDays": 11,
            "startDate": "2022/12/13",
            "finishDate": "2023/4/6",
            "progress": 25,
            "actions": [
                "start",
                "edit",
                "close"
            ],
            "parent": ""
        }
    ]
}
