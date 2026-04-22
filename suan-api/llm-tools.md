# LLM 工具

## 课表工具

### get_course_schedule_json

```python
@mcp.tool(
    name="get_course_schedule_json",
    title="获取课表 JSON",
    description="以 JSON 格式获取整学期整周全部课表数据，可选择是否压缩",
    annotations=ToolAnnotations(
        title="获取课表 JSON",
        readOnlyHint=True,  # 只读取数据，不修改
        destructiveHint=False,  # 非破坏性操作
        idempotentHint=True,  # 幂等：重复调用结果相同
        openWorldHint=False,  # 不依赖外部世界状态
    ),
)
async def get_course_schedule_json(compressed: bool = False) -> list[dict] | list[tuple]:
    """以 JSON 格式获取整学期整周全部课表

    Args:
        compressed: 是否压缩为紧凑的元组格式，默认为 False

    Returns:
        未压缩时（compressed=False）：
            课程字典列表，每个课程包含：
            - name: 课程名称
            - teacher: 授课教师（可能为 None）
            - classroom: 教室（可能为 None）
            - weeks: 周数，list[int]
            - day: 星期几，int
            - classes: 当日第几节课，list[int]
        压缩时（compressed=True）：
            元组列表 (name, teacher, classroom, weeks_str, day, classes)
            其中 weeks_str 为压缩后的周数字符串（如 "1-17"）
        失败时返回空列表
    """
```

LLM 在调用时可以选择是否压缩。

请注意，[NJUPT Suan](/astrbot-plugin/introduction.md) 提供的渲染课表图片的工具需要经过压缩的课程数据，否则调用时很可能会由于参数过长而失败。

### get_week_course_schedule_json

```python
@mcp.tool(
    name="get_week_course_schedule_json",
    title="获取指定周课表",
    description="以 JSON 格式获取指定教学周的全部课表数据，可选择是否压缩",
    annotations=ToolAnnotations(
        title="获取指定周课表",
        readOnlyHint=True,  # 只读取数据，不修改
        destructiveHint=False,  # 非破坏性操作
        idempotentHint=True,  # 幂等：重复调用结果相同
        openWorldHint=False,  # 不依赖外部世界状态
    ),
)
async def get_week_course_schedule_json(week: int, compressed: bool = False) -> list[dict] | list[tuple]:
    """以 JSON 格式获取指定教学周的全部课表

    Args:
        week: 教学周数，范围通常为 1-20
        compressed: 是否压缩为紧凑的元组格式，默认为 False

    Returns:
        未压缩时（compressed=False）：
            指定周的课程字典列表，每个课程包含：
            - name: 课程名称
            - teacher: 授课教师（可能为 None）
            - classroom: 教室（可能为 None）
            - weeks: 周数，list[int]
            - day: 星期几，int (1-7)
            - classes: 当日第几节课，list[int]
        压缩时（compressed=True）：
            元组列表 (name, teacher, classroom, weeks_str, day, classes)
            其中 weeks_str 为压缩后的周数字符串
        该周无课程或参数错误时返回空列表
    """
```

同上。

### get_week_day_course_schedule_json

```python
@mcp.tool(
    name="get_week_day_course_schedule_json",
    title="获取指定周星期课表",
    description="以 JSON 格式获取指定教学周和星期的课表数据，可选择是否压缩",
    annotations=ToolAnnotations(
        title="获取指定周星期课表",
        readOnlyHint=True,  # 只读取数据，不修改
        destructiveHint=False,  # 非破坏性操作
        idempotentHint=True,  # 幂等：重复调用结果相同
        openWorldHint=False,  # 不依赖外部世界状态
    ),
)
async def get_week_day_course_schedule_json(week: int, day: int, compressed: bool = False) -> list[dict] | list[tuple]:
    """以 JSON 格式获取指定教学周和星期的课表

    Args:
        week: 教学周数，范围通常为 1-20
        day: 星期几，1=星期一，2=星期二，...，7=星期日
        compressed: 是否压缩为紧凑的元组格式，默认为 False

    Returns:
        未压缩时（compressed=False）：
            指定周和星期的课程字典列表，每个课程包含：
            - name: 课程名称
            - teacher: 授课教师（可能为 None）
            - classroom: 教室（可能为 None）
            - weeks: 周数，list[int]
            - day: 星期几，int (1-7)
            - classes: 当日第几节课，list[int]
        压缩时（compressed=True）：
            元组列表 (name, teacher, classroom, weeks_str, day, classes)
            其中 weeks_str 为压缩后的周数字符串
        该时段无课程或参数错误时返回空列表
    """
```

同上。

此三个工具的返回格式是统一的。