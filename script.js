const modules = [
  {
    id: 'basics',
    title: 'R Basics',
    desc: 'Variables, comments, arithmetic, printing and simple objects.',
    lesson: `R is built around objects. You assign values with <-, call functions with name(), and use # for comments. Start simple: create values, print them, and combine them.`,
    tasks: [
      {
        title: 'Create your first variable',
        level: 'Beginner',
        prompt: 'Create a variable named x and store the number 10 in it.',
        starter: '# write your R code here',
        solution: 'x <- 10',
        accepted: ['\\bx\\s*(<-|=)\\s*10\\b'],
        hints: ['Use the assignment operator <-.', 'The variable name must be x.', 'Correct shape: x <- 10']
      },
      {
        title: 'Print a value',
        level: 'Beginner',
        prompt: 'Print the variable x.',
        starter: 'x <- 10\n# print x',
        solution: 'print(x)',
        accepted: ['print\\s*\\(\\s*x\\s*\\)', '^\\s*x\\s*$'],
        hints: ['Use print().', 'Put x inside the parentheses.', 'Correct shape: print(x)']
      },
      {
        title: 'Add two numbers',
        level: 'Beginner',
        prompt: 'Calculate 8 + 4 in R.',
        starter: '',
        solution: '8 + 4',
        accepted: ['8\\s*\\+\\s*4', '4\\s*\\+\\s*8'],
        hints: ['Use the + operator.', 'No function is needed.', 'Correct answer: 8 + 4']
      },
      {
        title: 'Store a calculation',
        level: 'Beginner',
        prompt: 'Create a variable named total that stores 15 + 27.',
        starter: '',
        solution: 'total <- 15 + 27',
        accepted: ['total\\s*(<-|=)\\s*15\\s*\\+\\s*27', 'total\\s*(<-|=)\\s*27\\s*\\+\\s*15'],
        hints: ['Create the variable first, then assign the calculation.', 'The variable must be called total.', 'Correct shape: total <- 15 + 27']
      },
      {
        title: 'Create text',
        level: 'Beginner',
        prompt: 'Create a variable named name and store the text "Maya".',
        starter: '',
        solution: 'name <- "Maya"',
        accepted: ['name\\s*(<-|=)\\s*["\\x27]maya["\\x27]'],
        hints: ['Text must be inside quotes.', 'Use the variable name name.', 'Correct shape: name <- "Maya"']
      },
      {
        title: 'Check the class',
        level: 'Beginner',
        prompt: 'Use R to check the class of the object name.',
        starter: 'name <- "Maya"',
        solution: 'class(name)',
        accepted: ['class\\s*\\(\\s*name\\s*\\)'],
        hints: ['Use the class() function.', 'Put name inside the function.', 'Correct shape: class(name)']
      },
      {
        title: 'Make a comment',
        level: 'Beginner',
        prompt: 'Write a comment that says: this is my first R comment.',
        starter: '',
        solution: '# this is my first R comment',
        accepted: ['#\\s*this\\s+is\\s+my\\s+first\\s+r\\s+comment'],
        hints: ['Comments start with #.', 'The text comes after #.', 'Correct shape: # this is my first R comment']
      },
      {
        title: 'Use parentheses',
        level: 'Beginner',
        prompt: 'Calculate (5 + 3) * 2 exactly with parentheses.',
        starter: '',
        solution: '(5 + 3) * 2',
        accepted: ['\\(\\s*5\\s*\\+\\s*3\\s*\\)\\s*\\*\\s*2'],
        hints: ['Parentheses force the addition first.', 'Use * for multiplication.', 'Correct answer: (5 + 3) * 2']
      },
      {
        title: 'Divide numbers',
        level: 'Beginner',
        prompt: 'Calculate 100 divided by 4.',
        starter: '',
        solution: '100 / 4',
        accepted: ['100\\s*/\\s*4'],
        hints: ['Use / for division.', 'The first number is 100.', 'Correct answer: 100 / 4']
      },
      {
        title: 'Boolean value',
        level: 'Beginner',
        prompt: 'Create a variable named is_ready and store TRUE in it.',
        starter: '',
        solution: 'is_ready <- TRUE',
        accepted: ['is_ready\\s*(<-|=)\\s*true\\b'],
        hints: ['Logical values are TRUE or FALSE.', 'Use uppercase TRUE in real R.', 'Correct shape: is_ready <- TRUE']
      },
      {
        title: 'Compare numbers',
        level: 'Beginner',
        prompt: 'Write R code that checks if 7 is greater than 3.',
        starter: '',
        solution: '7 > 3',
        accepted: ['7\\s*>\\s*3'],
        hints: ['Use the greater-than operator.', 'The expression should return TRUE.', 'Correct answer: 7 > 3']
      },
      {
        title: 'Remove an object',
        level: 'Beginner',
        prompt: 'Remove the object temp from the R environment.',
        starter: 'temp <- 99',
        solution: 'rm(temp)',
        accepted: ['rm\\s*\\(\\s*temp\\s*\\)'],
        hints: ['Use rm().', 'Put the object name inside the parentheses.', 'Correct shape: rm(temp)']
      }
    ]
  },
  {
    id: 'vectors',
    title: 'Vectors',
    desc: 'Create, index, filter and transform vectors.',
    lesson: `A vector is a one-dimensional collection of values. Use c() to combine values. Use square brackets [] to pick or filter elements. Most R functions work naturally on vectors.`,
    tasks: [
      {
        title: 'Create a numeric vector',
        level: 'Beginner',
        prompt: 'Create a vector named ages with the values 18, 21, 25, 30.',
        starter: '',
        solution: 'ages <- c(18, 21, 25, 30)',
        accepted: ['ages\\s*(<-|=)\\s*c\\s*\\(\\s*18\\s*,\\s*21\\s*,\\s*25\\s*,\\s*30\\s*\\)'],
        hints: ['Use c() to combine values.', 'The variable must be named ages.', 'Correct shape: ages <- c(18, 21, 25, 30)']
      },
      {
        title: 'Create a character vector',
        level: 'Beginner',
        prompt: 'Create a vector named cities with "Berlin", "Paris", and "Rome".',
        starter: '',
        solution: 'cities <- c("Berlin", "Paris", "Rome")',
        accepted: ['cities\\s*(<-|=)\\s*c\\s*\\(\\s*["\\x27]berlin["\\x27]\\s*,\\s*["\\x27]paris["\\x27]\\s*,\\s*["\\x27]rome["\\x27]\\s*\\)'],
        hints: ['Text values need quotes.', 'Use c() for the vector.', 'Correct shape: cities <- c("Berlin", "Paris", "Rome")']
      },
      {
        title: 'Get vector length',
        level: 'Beginner',
        prompt: 'Use R to get the number of elements in ages.',
        starter: 'ages <- c(18, 21, 25, 30)',
        solution: 'length(ages)',
        accepted: ['length\\s*\\(\\s*ages\\s*\\)'],
        hints: ['Use length().', 'Put the vector inside the function.', 'Correct answer: length(ages)']
      },
      {
        title: 'Select the first element',
        level: 'Beginner',
        prompt: 'Select the first value of ages.',
        starter: 'ages <- c(18, 21, 25, 30)',
        solution: 'ages[1]',
        accepted: ['ages\\s*\\[\\s*1\\s*\\]'],
        hints: ['R starts indexing at 1.', 'Use square brackets.', 'Correct answer: ages[1]']
      },
      {
        title: 'Select multiple elements',
        level: 'Beginner',
        prompt: 'Select the 2nd and 4th values of ages.',
        starter: 'ages <- c(18, 21, 25, 30)',
        solution: 'ages[c(2, 4)]',
        accepted: ['ages\\s*\\[\\s*c\\s*\\(\\s*2\\s*,\\s*4\\s*\\)\\s*\\]'],
        hints: ['Use ages[ ].', 'Inside brackets, use c(2, 4).', 'Correct answer: ages[c(2, 4)]']
      },
      {
        title: 'Filter values',
        level: 'Easy',
        prompt: 'Return all values in ages that are greater than 20.',
        starter: 'ages <- c(18, 21, 25, 30)',
        solution: 'ages[ages > 20]',
        accepted: ['ages\\s*\\[\\s*ages\\s*>\\s*20\\s*\\]'],
        hints: ['Filtering uses logical conditions inside brackets.', 'First write ages > 20.', 'Correct answer: ages[ages > 20]']
      },
      {
        title: 'Calculate vector mean',
        level: 'Easy',
        prompt: 'Calculate the mean of ages.',
        starter: 'ages <- c(18, 21, 25, 30)',
        solution: 'mean(ages)',
        accepted: ['mean\\s*\\(\\s*ages\\s*\\)'],
        hints: ['Use mean().', 'Put ages inside the function.', 'Correct answer: mean(ages)']
      },
      {
        title: 'Sort a vector',
        level: 'Easy',
        prompt: 'Sort the vector ages from smallest to largest.',
        starter: 'ages <- c(30, 18, 25, 21)',
        solution: 'sort(ages)',
        accepted: ['sort\\s*\\(\\s*ages\\s*\\)'],
        hints: ['Use sort().', 'Default sort is ascending.', 'Correct answer: sort(ages)']
      },
      {
        title: 'Sort descending',
        level: 'Medium',
        prompt: 'Sort ages from largest to smallest.',
        starter: 'ages <- c(30, 18, 25, 21)',
        solution: 'sort(ages, decreasing = TRUE)',
        accepted: ['sort\\s*\\(\\s*ages\\s*,\\s*decreasing\\s*=\\s*true\\s*\\)'],
        hints: ['Use sort().', 'Add decreasing = TRUE.', 'Correct answer: sort(ages, decreasing = TRUE)']
      },
      {
        title: 'Create a sequence',
        level: 'Easy',
        prompt: 'Create a vector from 1 to 10 and store it in nums.',
        starter: '',
        solution: 'nums <- 1:10',
        accepted: ['nums\\s*(<-|=)\\s*1\\s*:\\s*10', 'nums\\s*(<-|=)\\s*seq\\s*\\(\\s*1\\s*,\\s*10\\s*\\)'],
        hints: ['Use the colon operator.', '1:10 creates 1 through 10.', 'Correct answer: nums <- 1:10']
      },
      {
        title: 'Repeat values',
        level: 'Medium',
        prompt: 'Create a vector that repeats "R" five times and store it in reps.',
        starter: '',
        solution: 'reps <- rep("R", 5)',
        accepted: ['reps\\s*(<-|=)\\s*rep\\s*\\(\\s*["\\x27]r["\\x27]\\s*,\\s*5\\s*\\)'],
        hints: ['Use rep().', 'First argument is the value, second is how often.', 'Correct shape: reps <- rep("R", 5)']
      },
      {
        title: 'Replace one value',
        level: 'Medium',
        prompt: 'Replace the second value of ages with 22.',
        starter: 'ages <- c(18, 21, 25, 30)',
        solution: 'ages[2] <- 22',
        accepted: ['ages\\s*\\[\\s*2\\s*\\]\\s*(<-|=)\\s*22'],
        hints: ['Use indexing on the left side.', 'The second position is [2].', 'Correct answer: ages[2] <- 22']
      },
      {
        title: 'Logical filter with equal',
        level: 'Medium',
        prompt: 'Return all values in nums that are equal to 5.',
        starter: 'nums <- 1:10',
        solution: 'nums[nums == 5]',
        accepted: ['nums\\s*\\[\\s*nums\\s*==\\s*5\\s*\\]'],
        hints: ['Use == to test equality.', 'The condition goes inside brackets.', 'Correct answer: nums[nums == 5]']
      },
      {
        title: 'Remove missing values',
        level: 'Medium',
        prompt: 'Return x without missing values.',
        starter: 'x <- c(3, NA, 5, NA, 9)',
        solution: 'x[!is.na(x)]',
        accepted: ['x\\s*\\[\\s*!\\s*is\\.na\\s*\\(\\s*x\\s*\\)\\s*\\]', 'na\\.omit\\s*\\(\\s*x\\s*\\)'],
        hints: ['Missing values are detected with is.na().', '! means NOT.', 'Correct answer: x[!is.na(x)]']
      }
    ]
  },
  {
    id: 'stats',
    title: 'Descriptive Statistics',
    desc: 'Mean, median, spread, frequencies and summaries.',
    lesson: `Descriptive statistics describe what is already in your data. You summarize center, spread, range, counts and missing values. In R, functions like mean(), median(), sd(), table() and summary() are your daily tools.`,
    tasks: [
      {
        title: 'Mean',
        level: 'Easy',
        prompt: 'Calculate the mean of scores.',
        starter: 'scores <- c(70, 80, 90, 100)',
        solution: 'mean(scores)',
        accepted: ['mean\\s*\\(\\s*scores\\s*\\)'],
        hints: ['Mean means average.', 'Use mean().', 'Correct answer: mean(scores)']
      },
      {
        title: 'Median',
        level: 'Easy',
        prompt: 'Calculate the median of scores.',
        starter: 'scores <- c(70, 80, 90, 100)',
        solution: 'median(scores)',
        accepted: ['median\\s*\\(\\s*scores\\s*\\)'],
        hints: ['Median is the middle value.', 'Use median().', 'Correct answer: median(scores)']
      },
      {
        title: 'Minimum',
        level: 'Easy',
        prompt: 'Find the smallest value in scores.',
        starter: 'scores <- c(70, 80, 90, 100)',
        solution: 'min(scores)',
        accepted: ['min\\s*\\(\\s*scores\\s*\\)'],
        hints: ['Smallest value = minimum.', 'Use min().', 'Correct answer: min(scores)']
      },
      {
        title: 'Maximum',
        level: 'Easy',
        prompt: 'Find the largest value in scores.',
        starter: 'scores <- c(70, 80, 90, 100)',
        solution: 'max(scores)',
        accepted: ['max\\s*\\(\\s*scores\\s*\\)'],
        hints: ['Largest value = maximum.', 'Use max().', 'Correct answer: max(scores)']
      },
      {
        title: 'Range',
        level: 'Easy',
        prompt: 'Return the minimum and maximum of scores in one function call.',
        starter: 'scores <- c(70, 80, 90, 100)',
        solution: 'range(scores)',
        accepted: ['range\\s*\\(\\s*scores\\s*\\)'],
        hints: ['There is a function called range().', 'It returns min and max.', 'Correct answer: range(scores)']
      },
      {
        title: 'Standard deviation',
        level: 'Easy',
        prompt: 'Calculate the standard deviation of scores.',
        starter: 'scores <- c(70, 80, 90, 100)',
        solution: 'sd(scores)',
        accepted: ['sd\\s*\\(\\s*scores\\s*\\)'],
        hints: ['Standard deviation measures spread.', 'Use sd().', 'Correct answer: sd(scores)']
      },
      {
        title: 'Variance',
        level: 'Medium',
        prompt: 'Calculate the variance of scores.',
        starter: 'scores <- c(70, 80, 90, 100)',
        solution: 'var(scores)',
        accepted: ['var\\s*\\(\\s*scores\\s*\\)'],
        hints: ['Variance is another spread measure.', 'Use var().', 'Correct answer: var(scores)']
      },
      {
        title: 'Quick summary',
        level: 'Easy',
        prompt: 'Get a quick statistical summary of scores.',
        starter: 'scores <- c(70, 80, 90, 100)',
        solution: 'summary(scores)',
        accepted: ['summary\\s*\\(\\s*scores\\s*\\)'],
        hints: ['Use the most common summary function.', 'It is called summary().', 'Correct answer: summary(scores)']
      },
      {
        title: 'Mean with missing values',
        level: 'Medium',
        prompt: 'Calculate the mean of x and ignore NA values.',
        starter: 'x <- c(5, 7, NA, 10)',
        solution: 'mean(x, na.rm = TRUE)',
        accepted: ['mean\\s*\\(\\s*x\\s*,\\s*na\\.rm\\s*=\\s*true\\s*\\)'],
        hints: ['Missing values usually break mean().', 'Use na.rm = TRUE.', 'Correct answer: mean(x, na.rm = TRUE)']
      },
      {
        title: 'Count missing values',
        level: 'Medium',
        prompt: 'Count how many missing values are in x.',
        starter: 'x <- c(5, 7, NA, 10, NA)',
        solution: 'sum(is.na(x))',
        accepted: ['sum\\s*\\(\\s*is\\.na\\s*\\(\\s*x\\s*\\)\\s*\\)'],
        hints: ['is.na(x) returns TRUE/FALSE.', 'sum(TRUE/FALSE) counts TRUE values.', 'Correct answer: sum(is.na(x))']
      },
      {
        title: 'Frequency table',
        level: 'Easy',
        prompt: 'Create a frequency table for group.',
        starter: 'group <- c("A", "B", "A", "C", "B", "A")',
        solution: 'table(group)',
        accepted: ['table\\s*\\(\\s*group\\s*\\)'],
        hints: ['Frequencies are counts.', 'Use table().', 'Correct answer: table(group)']
      },
      {
        title: 'Proportions',
        level: 'Medium',
        prompt: 'Convert table(group) into proportions.',
        starter: 'group <- c("A", "B", "A", "C", "B", "A")',
        solution: 'prop.table(table(group))',
        accepted: ['prop\\.table\\s*\\(\\s*table\\s*\\(\\s*group\\s*\\)\\s*\\)'],
        hints: ['Start with table(group).', 'Wrap it in prop.table().', 'Correct answer: prop.table(table(group))']
      },
      {
        title: 'Quantiles',
        level: 'Medium',
        prompt: 'Calculate quartiles for scores.',
        starter: 'scores <- c(70, 80, 90, 100)',
        solution: 'quantile(scores)',
        accepted: ['quantile\\s*\\(\\s*scores\\s*\\)'],
        hints: ['Quartiles are quantiles.', 'Use quantile().', 'Correct answer: quantile(scores)']
      },
      {
        title: 'Interquartile range',
        level: 'Medium',
        prompt: 'Calculate the interquartile range of scores.',
        starter: 'scores <- c(70, 80, 90, 100)',
        solution: 'IQR(scores)',
        accepted: ['iqr\\s*\\(\\s*scores\\s*\\)'],
        hints: ['The function is written in uppercase in R: IQR().', 'It measures middle spread.', 'Correct answer: IQR(scores)']
      },
      {
        title: 'Five-number summary',
        level: 'Medium',
        prompt: 'Get the five-number summary of scores.',
        starter: 'scores <- c(70, 80, 90, 100)',
        solution: 'fivenum(scores)',
        accepted: ['fivenum\\s*\\(\\s*scores\\s*\\)'],
        hints: ['Use fivenum().', 'It returns min, hinges, median and max.', 'Correct answer: fivenum(scores)']
      },
      {
        title: 'Histogram',
        level: 'Medium',
        prompt: 'Create a histogram of scores.',
        starter: 'scores <- c(70, 80, 90, 100, 80, 85, 90)',
        solution: 'hist(scores)',
        accepted: ['hist\\s*\\(\\s*scores\\s*\\)'],
        hints: ['A histogram is a basic plot.', 'Use hist().', 'Correct answer: hist(scores)']
      },
      {
        title: 'Boxplot',
        level: 'Medium',
        prompt: 'Create a boxplot of scores.',
        starter: 'scores <- c(70, 80, 90, 100, 80, 85, 90)',
        solution: 'boxplot(scores)',
        accepted: ['boxplot\\s*\\(\\s*scores\\s*\\)'],
        hints: ['A boxplot shows median and spread.', 'Use boxplot().', 'Correct answer: boxplot(scores)']
      },
      {
        title: 'Coefficient of variation',
        level: 'Hard',
        prompt: 'Calculate the coefficient of variation for scores as sd divided by mean.',
        starter: 'scores <- c(70, 80, 90, 100)',
        solution: 'sd(scores) / mean(scores)',
        accepted: ['sd\\s*\\(\\s*scores\\s*\\)\\s*/\\s*mean\\s*\\(\\s*scores\\s*\\)'],
        hints: ['Coefficient of variation = standard deviation / mean.', 'Use sd(scores) and mean(scores).', 'Correct answer: sd(scores) / mean(scores)']
      }
    ]
  },
  {
    id: 'dataframes',
    title: 'Data Frames',
    desc: 'Create tables, select columns, filter rows and summarize variables.',
    lesson: `A data frame is R's table format. Columns are variables, rows are observations. Use $ to access a column, [] to subset, and functions like nrow(), names(), head() and summary().`,
    tasks: [
      {
        title: 'Create a data frame',
        level: 'Beginner',
        prompt: 'Create a data frame named people with columns name and age. Use names Ana, Ben and ages 22, 25.',
        starter: '',
        solution: 'people <- data.frame(name = c("Ana", "Ben"), age = c(22, 25))',
        accepted: ['people\\s*(<-|=)\\s*data\\.frame\\s*\\(.*name\\s*=\\s*c\\s*\\(\\s*["\\x27]ana["\\x27]\\s*,\\s*["\\x27]ben["\\x27]\\s*\\).*age\\s*=\\s*c\\s*\\(\\s*22\\s*,\\s*25\\s*\\).*\\)'],
        hints: ['Use data.frame().', 'Each column is created inside data.frame().', 'Correct shape: people <- data.frame(name = c("Ana", "Ben"), age = c(22, 25))']
      },
      {
        title: 'View first rows',
        level: 'Beginner',
        prompt: 'Show the first rows of people.',
        starter: 'people <- data.frame(name = c("Ana", "Ben"), age = c(22, 25))',
        solution: 'head(people)',
        accepted: ['head\\s*\\(\\s*people\\s*\\)'],
        hints: ['Use head().', 'Put people inside.', 'Correct answer: head(people)']
      },
      {
        title: 'Column names',
        level: 'Beginner',
        prompt: 'Show the column names of people.',
        starter: 'people <- data.frame(name = c("Ana", "Ben"), age = c(22, 25))',
        solution: 'names(people)',
        accepted: ['names\\s*\\(\\s*people\\s*\\)', 'colnames\\s*\\(\\s*people\\s*\\)'],
        hints: ['Use names() or colnames().', 'Put the data frame inside.', 'Correct answer: names(people)']
      },
      {
        title: 'Number of rows',
        level: 'Beginner',
        prompt: 'Count the number of rows in people.',
        starter: 'people <- data.frame(name = c("Ana", "Ben"), age = c(22, 25))',
        solution: 'nrow(people)',
        accepted: ['nrow\\s*\\(\\s*people\\s*\\)'],
        hints: ['Rows are counted with nrow().', 'Columns are counted with ncol().', 'Correct answer: nrow(people)']
      },
      {
        title: 'Number of columns',
        level: 'Beginner',
        prompt: 'Count the number of columns in people.',
        starter: 'people <- data.frame(name = c("Ana", "Ben"), age = c(22, 25))',
        solution: 'ncol(people)',
        accepted: ['ncol\\s*\\(\\s*people\\s*\\)'],
        hints: ['Columns are counted with ncol().', 'Rows are counted with nrow().', 'Correct answer: ncol(people)']
      },
      {
        title: 'Access a column',
        level: 'Easy',
        prompt: 'Access the age column from people.',
        starter: 'people <- data.frame(name = c("Ana", "Ben"), age = c(22, 25))',
        solution: 'people$age',
        accepted: ['people\\s*\\$\\s*age', 'people\\s*\\[\\s*["\\x27]age["\\x27]\\s*\\]'],
        hints: ['Use the $ operator.', 'Data frame name first, then $age.', 'Correct answer: people$age']
      },
      {
        title: 'Average age',
        level: 'Easy',
        prompt: 'Calculate the mean age in people.',
        starter: 'people <- data.frame(name = c("Ana", "Ben"), age = c(22, 25))',
        solution: 'mean(people$age)',
        accepted: ['mean\\s*\\(\\s*people\\s*\\$\\s*age\\s*\\)'],
        hints: ['First access the age column.', 'Then put it inside mean().', 'Correct answer: mean(people$age)']
      },
      {
        title: 'Filter rows by condition',
        level: 'Medium',
        prompt: 'Return rows from people where age is greater than 23.',
        starter: 'people <- data.frame(name = c("Ana", "Ben"), age = c(22, 25))',
        solution: 'people[people$age > 23, ]',
        accepted: ['people\\s*\\[\\s*people\\s*\\$\\s*age\\s*>\\s*23\\s*,\\s*\\]'],
        hints: ['Rows go before the comma.', 'Leave columns empty after comma to keep all columns.', 'Correct answer: people[people$age > 23, ]']
      },
      {
        title: 'Select one column with brackets',
        level: 'Medium',
        prompt: 'Select only the name column from people using brackets.',
        starter: 'people <- data.frame(name = c("Ana", "Ben"), age = c(22, 25))',
        solution: 'people[, "name"]',
        accepted: ['people\\s*\\[\\s*,\\s*["\\x27]name["\\x27]\\s*\\]', 'people\\s*\\[\\s*["\\x27]name["\\x27]\\s*\\]'],
        hints: ['Rows are before the comma, columns after.', 'Use "name" as the column.', 'Correct answer: people[, "name"]']
      },
      {
        title: 'Add a column',
        level: 'Medium',
        prompt: 'Add a column named city to people with values "Berlin" and "Paris".',
        starter: 'people <- data.frame(name = c("Ana", "Ben"), age = c(22, 25))',
        solution: 'people$city <- c("Berlin", "Paris")',
        accepted: ['people\\s*\\$\\s*city\\s*(<-|=)\\s*c\\s*\\(\\s*["\\x27]berlin["\\x27]\\s*,\\s*["\\x27]paris["\\x27]\\s*\\)'],
        hints: ['Use people$city on the left side.', 'Assign a vector of two city names.', 'Correct answer: people$city <- c("Berlin", "Paris")']
      },
      {
        title: 'Rename a column',
        level: 'Medium',
        prompt: 'Rename the second column of people to years.',
        starter: 'people <- data.frame(name = c("Ana", "Ben"), age = c(22, 25))',
        solution: 'names(people)[2] <- "years"',
        accepted: ['names\\s*\\(\\s*people\\s*\\)\\s*\\[\\s*2\\s*\\]\\s*(<-|=)\\s*["\\x27]years["\\x27]'],
        hints: ['Use names(people).', 'Select position [2].', 'Correct answer: names(people)[2] <- "years"']
      },
      {
        title: 'Structure',
        level: 'Easy',
        prompt: 'Show the structure of people.',
        starter: 'people <- data.frame(name = c("Ana", "Ben"), age = c(22, 25))',
        solution: 'str(people)',
        accepted: ['str\\s*\\(\\s*people\\s*\\)'],
        hints: ['Use str().', 'It shows data types and structure.', 'Correct answer: str(people)']
      },
      {
        title: 'Summary of a data frame',
        level: 'Easy',
        prompt: 'Create a summary of the whole people data frame.',
        starter: 'people <- data.frame(name = c("Ana", "Ben"), age = c(22, 25))',
        solution: 'summary(people)',
        accepted: ['summary\\s*\\(\\s*people\\s*\\)'],
        hints: ['Use summary().', 'Put the data frame inside.', 'Correct answer: summary(people)']
      },
      {
        title: 'Order rows',
        level: 'Hard',
        prompt: 'Order people by age from smallest to largest.',
        starter: 'people <- data.frame(name = c("Ben", "Ana"), age = c(25, 22))',
        solution: 'people[order(people$age), ]',
        accepted: ['people\\s*\\[\\s*order\\s*\\(\\s*people\\s*\\$\\s*age\\s*\\)\\s*,\\s*\\]'],
        hints: ['Use order() to create row order.', 'The ordering variable is people$age.', 'Correct answer: people[order(people$age), ]']
      },
      {
        title: 'Unique values',
        level: 'Medium',
        prompt: 'Return the unique cities from people.',
        starter: 'people <- data.frame(city = c("Berlin", "Paris", "Berlin"))',
        solution: 'unique(people$city)',
        accepted: ['unique\\s*\\(\\s*people\\s*\\$\\s*city\\s*\\)'],
        hints: ['Use unique().', 'Access the city column first.', 'Correct answer: unique(people$city)']
      },
      {
        title: 'Subset rows and columns',
        level: 'Hard',
        prompt: 'Return only the name column for rows where age is greater than 23.',
        starter: 'people <- data.frame(name = c("Ana", "Ben"), age = c(22, 25))',
        solution: 'people[people$age > 23, "name"]',
        accepted: ['people\\s*\\[\\s*people\\s*\\$\\s*age\\s*>\\s*23\\s*,\\s*["\\x27]name["\\x27]\\s*\\]'],
        hints: ['Rows condition before comma.', 'Column name after comma.', 'Correct answer: people[people$age > 23, "name"]']
      }
    ]
  },
  {
    id: 'cleaning',
    title: 'Cleaning Data',
    desc: 'Missing values, duplicates, conversions and simple cleaning.',
    lesson: `Real data is messy. You must find missing values, remove duplicates, convert data types and create clean variables before analysis.`,
    tasks: [
      {
        title: 'Detect NA values',
        level: 'Easy',
        prompt: 'Check which values in x are missing.',
        starter: 'x <- c(2, NA, 5)',
        solution: 'is.na(x)',
        accepted: ['is\\.na\\s*\\(\\s*x\\s*\\)'],
        hints: ['Missing values are NA.', 'Use is.na().', 'Correct answer: is.na(x)']
      },
      {
        title: 'Remove NA from vector',
        level: 'Medium',
        prompt: 'Remove missing values from x.',
        starter: 'x <- c(2, NA, 5)',
        solution: 'na.omit(x)',
        accepted: ['na\\.omit\\s*\\(\\s*x\\s*\\)', 'x\\s*\\[\\s*!\\s*is\\.na\\s*\\(\\s*x\\s*\\)\\s*\\]'],
        hints: ['You can use na.omit().', 'Or filter with !is.na(x).', 'Correct answer: na.omit(x)']
      },
      {
        title: 'Complete cases',
        level: 'Medium',
        prompt: 'Return only complete rows from df.',
        starter: 'df <- data.frame(a = c(1, NA, 3), b = c(4, 5, 6))',
        solution: 'df[complete.cases(df), ]',
        accepted: ['df\\s*\\[\\s*complete\\.cases\\s*\\(\\s*df\\s*\\)\\s*,\\s*\\]'],
        hints: ['Use complete.cases().', 'Put it in the row position.', 'Correct answer: df[complete.cases(df), ]']
      },
      {
        title: 'Remove duplicates',
        level: 'Easy',
        prompt: 'Remove duplicate rows from df.',
        starter: 'df <- data.frame(id = c(1, 1, 2), score = c(90, 90, 80))',
        solution: 'unique(df)',
        accepted: ['unique\\s*\\(\\s*df\\s*\\)'],
        hints: ['Use unique().', 'It can work on rows of a data frame.', 'Correct answer: unique(df)']
      },
      {
        title: 'Find duplicate rows',
        level: 'Medium',
        prompt: 'Check which rows of df are duplicates.',
        starter: 'df <- data.frame(id = c(1, 1, 2), score = c(90, 90, 80))',
        solution: 'duplicated(df)',
        accepted: ['duplicated\\s*\\(\\s*df\\s*\\)'],
        hints: ['The function is duplicated().', 'It returns TRUE/FALSE.', 'Correct answer: duplicated(df)']
      },
      {
        title: 'Convert to numeric',
        level: 'Medium',
        prompt: 'Convert the character vector x to numeric.',
        starter: 'x <- c("1", "2", "3")',
        solution: 'as.numeric(x)',
        accepted: ['as\\.numeric\\s*\\(\\s*x\\s*\\)'],
        hints: ['Use an as.* conversion function.', 'The target type is numeric.', 'Correct answer: as.numeric(x)']
      },
      {
        title: 'Convert to factor',
        level: 'Medium',
        prompt: 'Convert group to a factor.',
        starter: 'group <- c("A", "B", "A")',
        solution: 'factor(group)',
        accepted: ['factor\\s*\\(\\s*group\\s*\\)', 'as\\.factor\\s*\\(\\s*group\\s*\\)'],
        hints: ['Categories are often stored as factors.', 'Use factor().', 'Correct answer: factor(group)']
      },
      {
        title: 'Trim spaces',
        level: 'Medium',
        prompt: 'Remove leading and trailing spaces from names.',
        starter: 'names <- c(" Ana ", " Ben")',
        solution: 'trimws(names)',
        accepted: ['trimws\\s*\\(\\s*names\\s*\\)'],
        hints: ['Use trimws().', 'It trims whitespace.', 'Correct answer: trimws(names)']
      },
      {
        title: 'Lowercase text',
        level: 'Medium',
        prompt: 'Convert names to lowercase.',
        starter: 'names <- c("Ana", "BEN")',
        solution: 'tolower(names)',
        accepted: ['tolower\\s*\\(\\s*names\\s*\\)'],
        hints: ['Use tolower().', 'toupper() does the opposite.', 'Correct answer: tolower(names)']
      },
      {
        title: 'Replace NA with zero',
        level: 'Hard',
        prompt: 'Replace missing values in x with 0.',
        starter: 'x <- c(2, NA, 5)',
        solution: 'x[is.na(x)] <- 0',
        accepted: ['x\\s*\\[\\s*is\\.na\\s*\\(\\s*x\\s*\\)\\s*\\]\\s*(<-|=)\\s*0'],
        hints: ['Put the condition on the left side.', 'Use is.na(x) inside brackets.', 'Correct answer: x[is.na(x)] <- 0']
      }
    ]
  },
  {
    id: 'logic',
    title: 'Logic, Loops & Functions',
    desc: 'if statements, for loops, apply-style thinking and your own functions.',
    lesson: `Programming means controlling flow. Use if/else to make decisions, for loops to repeat actions, and functions to reuse code. Keep functions small and clear.`,
    tasks: [
      {
        title: 'if statement',
        level: 'Medium',
        prompt: 'Write an if statement that prints "adult" if age is at least 18.',
        starter: 'age <- 20',
        solution: 'if (age >= 18) { print("adult") }',
        accepted: ['if\\s*\\(\\s*age\\s*>=\\s*18\\s*\\).*print\\s*\\(\\s*["\\x27]adult["\\x27]\\s*\\)'],
        hints: ['Use if (condition) { ... }.', 'The condition is age >= 18.', 'Correct shape: if (age >= 18) { print("adult") }']
      },
      {
        title: 'if else',
        level: 'Medium',
        prompt: 'Print "pass" if score is at least 50, otherwise print "fail".',
        starter: 'score <- 45',
        solution: 'if (score >= 50) { print("pass") } else { print("fail") }',
        accepted: ['if\\s*\\(\\s*score\\s*>=\\s*50\\s*\\).*print\\s*\\(\\s*["\\x27]pass["\\x27]\\s*\\).*else.*print\\s*\\(\\s*["\\x27]fail["\\x27]\\s*\\)'],
        hints: ['Use if (...) { ... } else { ... }.', 'Condition: score >= 50.', 'Correct shape: if (score >= 50) { print("pass") } else { print("fail") }']
      },
      {
        title: 'Vectorized ifelse',
        level: 'Medium',
        prompt: 'Create result: "pass" for scores >= 50 and "fail" otherwise.',
        starter: 'scores <- c(40, 70, 90)',
        solution: 'result <- ifelse(scores >= 50, "pass", "fail")',
        accepted: ['result\\s*(<-|=)\\s*ifelse\\s*\\(\\s*scores\\s*>=\\s*50\\s*,\\s*["\\x27]pass["\\x27]\\s*,\\s*["\\x27]fail["\\x27]\\s*\\)'],
        hints: ['Use ifelse(condition, yes, no).', 'The condition is scores >= 50.', 'Correct answer: result <- ifelse(scores >= 50, "pass", "fail")']
      },
      {
        title: 'For loop 1 to 5',
        level: 'Medium',
        prompt: 'Write a for loop that prints numbers 1 to 5.',
        starter: '',
        solution: 'for (i in 1:5) { print(i) }',
        accepted: ['for\\s*\\(\\s*i\\s+in\\s+1\\s*:\\s*5\\s*\\).*print\\s*\\(\\s*i\\s*\\)'],
        hints: ['Use for (i in 1:5).', 'Inside the loop, print i.', 'Correct shape: for (i in 1:5) { print(i) }']
      },
      {
        title: 'Create empty vector',
        level: 'Medium',
        prompt: 'Create an empty numeric vector named results.',
        starter: '',
        solution: 'results <- numeric()',
        accepted: ['results\\s*(<-|=)\\s*numeric\\s*\\(\\s*\\)', 'results\\s*(<-|=)\\s*c\\s*\\(\\s*\\)'],
        hints: ['Use numeric().', 'Assign it to results.', 'Correct answer: results <- numeric()']
      },
      {
        title: 'Function square',
        level: 'Medium',
        prompt: 'Create a function named square that returns x squared.',
        starter: '',
        solution: 'square <- function(x) { x^2 }',
        accepted: ['square\\s*(<-|=)\\s*function\\s*\\(\\s*x\\s*\\).*x\\s*\\^\\s*2'],
        hints: ['Use function(x).', 'x squared is x^2.', 'Correct shape: square <- function(x) { x^2 }']
      },
      {
        title: 'Call a function',
        level: 'Easy',
        prompt: 'Call square with the value 6.',
        starter: 'square <- function(x) { x^2 }',
        solution: 'square(6)',
        accepted: ['square\\s*\\(\\s*6\\s*\\)'],
        hints: ['Function calls use parentheses.', 'Put 6 inside square().', 'Correct answer: square(6)']
      },
      {
        title: 'Function with two inputs',
        level: 'Medium',
        prompt: 'Create a function named add that adds a and b.',
        starter: '',
        solution: 'add <- function(a, b) { a + b }',
        accepted: ['add\\s*(<-|=)\\s*function\\s*\\(\\s*a\\s*,\\s*b\\s*\\).*a\\s*\\+\\s*b'],
        hints: ['Use function(a, b).', 'Return a + b.', 'Correct shape: add <- function(a, b) { a + b }']
      },
      {
        title: 'Apply mean to columns',
        level: 'Hard',
        prompt: 'Use sapply to calculate the mean of each column in df.',
        starter: 'df <- data.frame(a = c(1, 2), b = c(3, 4))',
        solution: 'sapply(df, mean)',
        accepted: ['sapply\\s*\\(\\s*df\\s*,\\s*mean\\s*\\)'],
        hints: ['Use sapply(data, function).', 'The function is mean.', 'Correct answer: sapply(df, mean)']
      },
      {
        title: 'Logical AND',
        level: 'Medium',
        prompt: 'Filter x for values greater than 3 and less than 8.',
        starter: 'x <- 1:10',
        solution: 'x[x > 3 & x < 8]',
        accepted: ['x\\s*\\[\\s*x\\s*>\\s*3\\s*&\\s*x\\s*<\\s*8\\s*\\]'],
        hints: ['Use & for AND.', 'Both conditions go inside brackets.', 'Correct answer: x[x > 3 & x < 8]']
      },
      {
        title: 'Logical OR',
        level: 'Medium',
        prompt: 'Filter x for values less than 3 or greater than 8.',
        starter: 'x <- 1:10',
        solution: 'x[x < 3 | x > 8]',
        accepted: ['x\\s*\\[\\s*x\\s*<\\s*3\\s*\\|\\s*x\\s*>\\s*8\\s*\\]'],
        hints: ['Use | for OR.', 'Both conditions go inside brackets.', 'Correct answer: x[x < 3 | x > 8]']
      },
      {
        title: 'While loop',
        level: 'Hard',
        prompt: 'Write a while loop that prints i while i is less than or equal to 3 and increases i by 1 each time.',
        starter: 'i <- 1',
        solution: 'while (i <= 3) { print(i); i <- i + 1 }',
        accepted: ['while\\s*\\(\\s*i\\s*<=\\s*3\\s*\\).*print\\s*\\(\\s*i\\s*\\).*i\\s*(<-|=)\\s*i\\s*\\+\\s*1'],
        hints: ['Use while (i <= 3).', 'Inside: print(i), then update i.', 'Correct shape: while (i <= 3) { print(i); i <- i + 1 }']
      },
      {
        title: 'Return explicitly',
        level: 'Medium',
        prompt: 'Create a function double_it that returns x * 2 using return().',
        starter: '',
        solution: 'double_it <- function(x) { return(x * 2) }',
        accepted: ['double_it\\s*(<-|=)\\s*function\\s*\\(\\s*x\\s*\\).*return\\s*\\(\\s*x\\s*\\*\\s*2\\s*\\)'],
        hints: ['Use return().', 'The expression is x * 2.', 'Correct shape: double_it <- function(x) { return(x * 2) }']
      },
      {
        title: 'Find values in set',
        level: 'Medium',
        prompt: 'Return values in x that are either 2, 4, or 6.',
        starter: 'x <- 1:10',
        solution: 'x[x %in% c(2, 4, 6)]',
        accepted: ['x\\s*\\[\\s*x\\s*%in%\\s*c\\s*\\(\\s*2\\s*,\\s*4\\s*,\\s*6\\s*\\)\\s*\\]'],
        hints: ['Use %in% to check membership.', 'The set is c(2, 4, 6).', 'Correct answer: x[x %in% c(2, 4, 6)]']
      }
    ]
  },
  {
    id: 'projects',
    title: 'Mini Projects',
    desc: 'Small real-world analysis tasks combining several skills.',
    lesson: `Mini projects train you to combine steps. Real analysis is rarely one function. You create data, inspect it, clean it, summarize it and explain what you found.`,
    tasks: [
      {
        title: 'Mini project: build sales data',
        level: 'Medium',
        prompt: 'Create a data frame named sales with product = "A", "B", "C" and revenue = 100, 150, 120.',
        starter: '',
        solution: 'sales <- data.frame(product = c("A", "B", "C"), revenue = c(100, 150, 120))',
        accepted: ['sales\\s*(<-|=)\\s*data\\.frame\\s*\\(.*product\\s*=\\s*c\\s*\\(\\s*["\\x27]a["\\x27]\\s*,\\s*["\\x27]b["\\x27]\\s*,\\s*["\\x27]c["\\x27]\\s*\\).*revenue\\s*=\\s*c\\s*\\(\\s*100\\s*,\\s*150\\s*,\\s*120\\s*\\).*\\)'],
        hints: ['Use data.frame().', 'Create two columns: product and revenue.', 'Correct shape: sales <- data.frame(product = c("A", "B", "C"), revenue = c(100, 150, 120))']
      },
      {
        title: 'Mini project: total revenue',
        level: 'Easy',
        prompt: 'Calculate total revenue from sales.',
        starter: 'sales <- data.frame(product = c("A", "B", "C"), revenue = c(100, 150, 120))',
        solution: 'sum(sales$revenue)',
        accepted: ['sum\\s*\\(\\s*sales\\s*\\$\\s*revenue\\s*\\)'],
        hints: ['Total means sum.', 'Access the revenue column.', 'Correct answer: sum(sales$revenue)']
      },
      {
        title: 'Mini project: best product',
        level: 'Hard',
        prompt: 'Return the row of sales with the highest revenue.',
        starter: 'sales <- data.frame(product = c("A", "B", "C"), revenue = c(100, 150, 120))',
        solution: 'sales[which.max(sales$revenue), ]',
        accepted: ['sales\\s*\\[\\s*which\\.max\\s*\\(\\s*sales\\s*\\$\\s*revenue\\s*\\)\\s*,\\s*\\]'],
        hints: ['Use which.max() to find the row number.', 'Put it in the row position.', 'Correct answer: sales[which.max(sales$revenue), ]']
      },
      {
        title: 'Mini project: add profit margin',
        level: 'Hard',
        prompt: 'Add a column margin to sales calculated as profit / revenue.',
        starter: 'sales <- data.frame(revenue = c(100, 150), profit = c(20, 45))',
        solution: 'sales$margin <- sales$profit / sales$revenue',
        accepted: ['sales\\s*\\$\\s*margin\\s*(<-|=)\\s*sales\\s*\\$\\s*profit\\s*/\\s*sales\\s*\\$\\s*revenue'],
        hints: ['Create sales$margin on the left side.', 'Formula: profit divided by revenue.', 'Correct answer: sales$margin <- sales$profit / sales$revenue']
      },
      {
        title: 'Mini project: classify sales',
        level: 'Hard',
        prompt: 'Create a column level: "high" if revenue is greater than 120, otherwise "low".',
        starter: 'sales <- data.frame(revenue = c(100, 150, 120))',
        solution: 'sales$level <- ifelse(sales$revenue > 120, "high", "low")',
        accepted: ['sales\\s*\\$\\s*level\\s*(<-|=)\\s*ifelse\\s*\\(\\s*sales\\s*\\$\\s*revenue\\s*>\\s*120\\s*,\\s*["\\x27]high["\\x27]\\s*,\\s*["\\x27]low["\\x27]\\s*\\)'],
        hints: ['Use ifelse().', 'Condition: sales$revenue > 120.', 'Correct answer: sales$level <- ifelse(sales$revenue > 120, "high", "low")']
      },
      {
        title: 'Mini project: count categories',
        level: 'Medium',
        prompt: 'Count how often each sales level occurs.',
        starter: 'sales <- data.frame(level = c("high", "low", "high"))',
        solution: 'table(sales$level)',
        accepted: ['table\\s*\\(\\s*sales\\s*\\$\\s*level\\s*\\)'],
        hints: ['Counts use table().', 'Access the level column.', 'Correct answer: table(sales$level)']
      },
      {
        title: 'Mini project: export CSV',
        level: 'Medium',
        prompt: 'Write sales to a CSV file named sales.csv without row names.',
        starter: 'sales <- data.frame(product = c("A", "B"), revenue = c(100, 150))',
        solution: 'write.csv(sales, "sales.csv", row.names = FALSE)',
        accepted: ['write\\.csv\\s*\\(\\s*sales\\s*,\\s*["\\x27]sales\\.csv["\\x27]\\s*,\\s*row\\.names\\s*=\\s*false\\s*\\)'],
        hints: ['Use write.csv().', 'Add row.names = FALSE.', 'Correct answer: write.csv(sales, "sales.csv", row.names = FALSE)']
      },
      {
        title: 'Mini project: read CSV',
        level: 'Medium',
        prompt: 'Read a CSV file named sales.csv and store it in sales.',
        starter: '',
        solution: 'sales <- read.csv("sales.csv")',
        accepted: ['sales\\s*(<-|=)\\s*read\\.csv\\s*\\(\\s*["\\x27]sales\\.csv["\\x27]\\s*\\)'],
        hints: ['Use read.csv().', 'Assign the result to sales.', 'Correct answer: sales <- read.csv("sales.csv")']
      },
      {
        title: 'Mini project: simple plot',
        level: 'Medium',
        prompt: 'Create a bar plot of sales revenue.',
        starter: 'sales <- data.frame(product = c("A", "B", "C"), revenue = c(100, 150, 120))',
        solution: 'barplot(sales$revenue, names.arg = sales$product)',
        accepted: ['barplot\\s*\\(\\s*sales\\s*\\$\\s*revenue\\s*,\\s*names\\.arg\\s*=\\s*sales\\s*\\$\\s*product\\s*\\)'],
        hints: ['Use barplot().', 'Use names.arg for labels.', 'Correct answer: barplot(sales$revenue, names.arg = sales$product)']
      },
      {
        title: 'Mini project: full summary',
        level: 'Easy',
        prompt: 'Get a statistical summary of sales.',
        starter: 'sales <- data.frame(product = c("A", "B"), revenue = c(100, 150))',
        solution: 'summary(sales)',
        accepted: ['summary\\s*\\(\\s*sales\\s*\\)'],
        hints: ['Use summary().', 'Put the data frame inside.', 'Correct answer: summary(sales)']
      }
    ]
  }
];

const glossary = [
  ['<-', 'Assignment operator. Stores a value in an object. Example: x <- 10.'],
  ['c()', 'Combines values into a vector. Example: c(1, 2, 3).'],
  ['mean()', 'Calculates the average.'],
  ['median()', 'Calculates the middle value.'],
  ['sd()', 'Calculates standard deviation, a measure of spread.'],
  ['summary()', 'Gives a fast descriptive overview of an object.'],
  ['table()', 'Counts how often each category appears.'],
  ['data.frame()', 'Creates a table-like object with rows and columns.'],
  ['$', 'Accesses a column inside a data frame. Example: df$age.'],
  ['[]', 'Subsets vectors, rows or columns. Example: x[1] or df[rows, columns].'],
  ['NA', 'Missing value in R.'],
  ['is.na()', 'Checks whether values are missing.'],
  ['na.rm = TRUE', 'Removes missing values inside functions like mean().'],
  ['ifelse()', 'Vectorized if/else: ifelse(condition, yes, no).'],
  ['function()', 'Creates a reusable function.'],
  ['for', 'Repeats code for each value in a sequence.'],
  ['%in%', 'Checks whether values appear in a set.'],
  ['str()', 'Shows the structure of an object.'],
  ['head()', 'Shows the first rows or values.'],
  ['which.max()', 'Returns the position of the largest value.']
];

const STORAGE_KEY = 'rCoachState.v1';
const app = document.getElementById('app');
const navButtons = [...document.querySelectorAll('.nav-item')];
const themeBtn = document.getElementById('themeBtn');

const allExercises = modules.flatMap(module => module.tasks.map((task, index) => ({
  ...task,
  id: `${module.id}-${index + 1}`,
  moduleId: module.id,
  moduleTitle: module.title,
  number: index + 1
})));

let state = loadState();
let currentView = 'learn';
let selectedModule = state.selectedModule || modules[0].id;
let selectedExerciseId = state.selectedExerciseId || getFirstUnfinished(selectedModule)?.id || allExercises[0].id;
let hintIndex = 0;

init();

function init() {
  applyTheme();
  render();
  navButtons.forEach(btn => btn.addEventListener('click', () => {
    currentView = btn.dataset.view;
    navButtons.forEach(b => b.classList.toggle('active', b === btn));
    render();
  }));
  themeBtn.addEventListener('click', toggleTheme);
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {});
  }
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { completed: {}, attempts: {}, points: 0, theme: 'dark' };
  } catch {
    return { completed: {}, attempts: {}, points: 0, theme: 'dark' };
  }
}

function saveState() {
  state.selectedModule = selectedModule;
  state.selectedExerciseId = selectedExerciseId;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function applyTheme() {
  document.documentElement.classList.toggle('light', state.theme === 'light');
  themeBtn.textContent = state.theme === 'light' ? '☀' : '☾';
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  saveState();
  applyTheme();
}

function getCompletedCount() {
  return Object.keys(state.completed || {}).length;
}

function getModuleExercises(moduleId) {
  return allExercises.filter(ex => ex.moduleId === moduleId);
}

function getModuleProgress(moduleId) {
  const items = getModuleExercises(moduleId);
  const done = items.filter(ex => state.completed?.[ex.id]).length;
  return { done, total: items.length, percent: Math.round((done / items.length) * 100) };
}

function getFirstUnfinished(moduleId) {
  return getModuleExercises(moduleId).find(ex => !state.completed?.[ex.id]) || getModuleExercises(moduleId)[0];
}

function getExercise(id) {
  return allExercises.find(ex => ex.id === id) || allExercises[0];
}

function render() {
  saveState();
  if (currentView === 'learn') return renderLearn();
  if (currentView === 'practice') return renderPractice();
  if (currentView === 'progress') return renderProgress();
  if (currentView === 'glossary') return renderGlossary();
}

function renderLearn() {
  const completed = getCompletedCount();
  const total = allExercises.length;
  app.innerHTML = `
    <section class="card hero">
      <h2>Learn R with tiny mobile missions.</h2>
      <p>Read a short lesson, solve code exercises, check your answer, get tips, and build real R muscle.</p>
      <div class="stats-row">
        <div class="stat-pill"><span>Done</span><b>${completed}</b></div>
        <div class="stat-pill"><span>Total</span><b>${total}</b></div>
        <div class="stat-pill"><span>Points</span><b>${state.points || 0}</b></div>
      </div>
    </section>
    <section class="grid">
      ${modules.map(module => {
        const p = getModuleProgress(module.id);
        return `
          <button class="module-card" data-module="${module.id}">
            <div class="module-head">
              <div>
                <h3>${module.title}</h3>
                <p>${module.desc}</p>
              </div>
              <span class="badge">${p.done}/${p.total}</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width:${p.percent}%"></div></div>
          </button>
        `;
      }).join('')}
    </section>
  `;

  app.querySelectorAll('[data-module]').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedModule = btn.dataset.module;
      selectedExerciseId = getFirstUnfinished(selectedModule).id;
      currentView = 'practice';
      syncNav('practice');
      renderPractice();
    });
  });
}

function renderPractice() {
  const module = modules.find(m => m.id === selectedModule) || modules[0];
  const exercise = getExercise(selectedExerciseId);
  const moduleExercises = getModuleExercises(selectedModule);
  const p = getModuleProgress(selectedModule);
  hintIndex = 0;

  app.innerHTML = `
    <div class="practice-toolbar">
      <select id="moduleSelect" aria-label="Choose module">
        ${modules.map(m => `<option value="${m.id}" ${m.id === selectedModule ? 'selected' : ''}>${m.title}</option>`).join('')}
      </select>
      <input id="searchInput" class="search" placeholder="Search tasks" />
    </div>

    <section class="card lesson-box">
      <b>${module.title}</b>
      <p>${module.lesson}</p>
      <div class="progress-bar" style="margin-top:12px"><div class="progress-fill" style="width:${p.percent}%"></div></div>
      <p class="kbd-tip">Module progress: ${p.done}/${p.total} completed</p>
    </section>

    <section class="card exercise-card">
      <div class="exercise-meta">
        <span class="badge">Exercise ${exercise.number}</span>
        <span class="level">${exercise.level}</span>
      </div>
      <h2>${exercise.title}</h2>
      <p class="prompt">${exercise.prompt}</p>
      ${exercise.starter ? `<pre class="code">${escapeHtml(exercise.starter)}</pre>` : ''}
      <textarea id="answer" class="answer-area" spellcheck="false" autocapitalize="off" autocomplete="off" placeholder="Type your R code here..."></textarea>
      <div class="btn-row" style="margin-top:12px">
        <button id="checkBtn" class="primary-btn">Check answer</button>
        <button id="hintBtn" class="secondary-btn">Get hint</button>
        <button id="solutionBtn" class="ghost-btn">Show solution</button>
        <button id="nextBtn" class="secondary-btn">Next</button>
      </div>
      <div id="feedback" class="feedback"></div>
      <p class="kbd-tip">Tip: on iPhone, use a coding keyboard if you have one. Symbols like <-, $, [], and %in% matter in R.</p>
    </section>

    <section class="card">
      <h3>Task list</h3>
      <div id="exerciseList" class="exercise-list">
        ${moduleExercises.map(ex => `
          <button class="exercise-row ${state.completed?.[ex.id] ? 'done' : ''}" data-exercise="${ex.id}">
            <div><span>${ex.level} · #${ex.number}</span><b>${ex.title}</b></div>
            <div class="checkmark">${state.completed?.[ex.id] ? '✓' : '›'}</div>
          </button>
        `).join('')}
      </div>
    </section>
  `;

  const answer = document.getElementById('answer');
  const feedback = document.getElementById('feedback');

  document.getElementById('moduleSelect').addEventListener('change', e => {
    selectedModule = e.target.value;
    selectedExerciseId = getFirstUnfinished(selectedModule).id;
    renderPractice();
  });

  document.getElementById('searchInput').addEventListener('input', e => {
    const term = e.target.value.trim().toLowerCase();
    const rows = [...document.querySelectorAll('.exercise-row')];
    rows.forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(term) ? 'flex' : 'none';
    });
  });

  document.getElementById('checkBtn').addEventListener('click', () => {
    const correct = checkAnswer(exercise, answer.value);
    state.attempts[exercise.id] = (state.attempts[exercise.id] || 0) + 1;

    if (correct) {
      if (!state.completed[exercise.id]) {
        state.completed[exercise.id] = true;
        const bonus = exercise.level === 'Hard' ? 25 : exercise.level === 'Medium' ? 18 : 12;
        state.points = (state.points || 0) + bonus;
        launchConfetti();
      }
      showFeedback(feedback, 'good', 'Correct. Strong work.', `Best solution: ${exercise.solution}`);
      saveState();
      setTimeout(() => refreshCurrentRows(), 80);
    } else {
      const attempt = state.attempts[exercise.id] || 1;
      const tip = exercise.hints[Math.min(attempt - 1, exercise.hints.length - 1)] || exercise.hints[0];
      showFeedback(feedback, 'bad', 'Not correct yet.', tip);
      saveState();
    }
  });

  document.getElementById('hintBtn').addEventListener('click', () => {
    const tip = exercise.hints[hintIndex % exercise.hints.length];
    hintIndex++;
    showFeedback(feedback, 'warn', 'Hint', tip);
  });

  document.getElementById('solutionBtn').addEventListener('click', () => {
    showFeedback(feedback, 'warn', 'Solution shown.', exercise.solution);
    answer.value = exercise.solution;
    answer.focus();
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    const currentIndex = moduleExercises.findIndex(ex => ex.id === selectedExerciseId);
    const next = moduleExercises[(currentIndex + 1) % moduleExercises.length];
    selectedExerciseId = next.id;
    renderPractice();
  });

  app.querySelectorAll('[data-exercise]').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedExerciseId = btn.dataset.exercise;
      renderPractice();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function renderProgress() {
  const completed = getCompletedCount();
  const total = allExercises.length;
  const percent = Math.round((completed / total) * 100);
  const level = state.points >= 1000 ? 'R Beast' : state.points >= 600 ? 'R Fighter' : state.points >= 250 ? 'R Builder' : state.points >= 80 ? 'R Rookie+' : 'R Rookie';

  app.innerHTML = `
    <section class="card hero">
      <h2>Your R progress</h2>
      <p>No excuses. Finish tasks, collect points, and make R feel normal.</p>
      <div class="stats-row">
        <div class="stat-pill"><span>Level</span><b>${level}</b></div>
        <div class="stat-pill"><span>Points</span><b>${state.points || 0}</b></div>
        <div class="stat-pill"><span>Done</span><b>${percent}%</b></div>
      </div>
    </section>

    <section class="card">
      <h3>Overall completion</h3>
      <div class="progress-bar"><div class="progress-fill" style="width:${percent}%"></div></div>
      <p class="kbd-tip">${completed}/${total} exercises completed.</p>
    </section>

    <section class="grid">
      ${modules.map(module => {
        const p = getModuleProgress(module.id);
        return `
          <div class="card">
            <div class="module-head">
              <div><h3>${module.title}</h3><p>${p.done}/${p.total} finished</p></div>
              <span class="badge">${p.percent}%</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width:${p.percent}%"></div></div>
          </div>
        `;
      }).join('')}
    </section>

    <section class="card">
      <h3>Reset</h3>
      <p class="prompt">This deletes local progress on this device only.</p>
      <button id="resetBtn" class="danger-btn">Reset progress</button>
    </section>
  `;

  document.getElementById('resetBtn').addEventListener('click', () => {
    const ok = confirm('Reset all progress on this device?');
    if (!ok) return;
    state.completed = {};
    state.attempts = {};
    state.points = 0;
    saveState();
    renderProgress();
    toast('Progress reset. Start clean.');
  });
}

function renderGlossary() {
  app.innerHTML = `
    <section class="card hero">
      <h2>R Glossary</h2>
      <p>Fast explanations for the words and symbols you need most.</p>
    </section>
    <section class="card">
      ${glossary.map(([term, desc]) => `
        <div class="glossary-item">
          <code>${escapeHtml(term)}</code>
          <span>${escapeHtml(desc)}</span>
        </div>
      `).join('')}
    </section>
  `;
}

function checkAnswer(exercise, input) {
  const raw = normalizeQuotes(input).trim();
  if (!raw) return false;
  return exercise.accepted.some(pattern => {
    try {
      return new RegExp(pattern, 'is').test(raw);
    } catch {
      return false;
    }
  });
}

function normalizeQuotes(str) {
  return String(str)
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\u00A0/g, ' ');
}

function showFeedback(el, type, title, text) {
  el.className = `feedback show ${type}`;
  el.innerHTML = `<p><b>${escapeHtml(title)}</b></p><small>${escapeHtml(text)}</small>`;
}

function refreshCurrentRows() {
  document.querySelectorAll('.exercise-row').forEach(row => {
    const done = state.completed[row.dataset.exercise];
    row.classList.toggle('done', !!done);
    const mark = row.querySelector('.checkmark');
    if (mark) mark.textContent = done ? '✓' : '›';
  });
}

function syncNav(view) {
  navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function toast(message) {
  const tpl = document.getElementById('toastTpl');
  const node = tpl.content.firstElementChild.cloneNode(true);
  node.textContent = message;
  document.body.appendChild(node);
  setTimeout(() => node.remove(), 2200);
}

function launchConfetti() {
  const colors = ['#66e3ff', '#b28cff', '#66f2a3', '#ffd166', '#ff7b92'];
  for (let i = 0; i < 34; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 0.18 + 's';
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 1400);
  }
}
