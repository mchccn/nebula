use std::env::args;

pub enum ComparisonType {
    Greater,
    Lesser,
    Equal,
}

pub enum ValueType {
    ValueNumber(f64),
    ValueBoolean(bool),
    ValueString(String),
    ValueNull(),
}

#[derive(Debug)]
pub struct Filter {
    pub column: String,
    pub comparison: ComparisonType,
    pub value: ValueType,
}

static filter_column: &str = "column";
static FILTER_COLUMN: &str = "column";

fn main() {
    // more later?

    let x = 1;
    
    match x {
        1 => println!("1"),
        _ => println!("other"),
    }

    fn inner(refer: &mut String) -> &mut String {
        return refer;
    }

    let mut y = 2;

    for i in 0..10 {
        y += i;
    }

    println!("the args are {:?}", args());
}
